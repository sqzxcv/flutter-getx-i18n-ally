import { DefaultDynamicExtractionsRules, DefaultExtractionRules, ExtractionRule } from '../rules'
import { shouldExtract } from '../shouldExtract'
import { ExtractionBabelOptions } from './options'
import { DetectionResult } from '~/core/types'

/**
 * Dart parser for extracting hard-coded strings
 * 
 * This parser identifies string literals in Dart code that should be
 * extracted for internationalization, specifically targeting strings
 * that are not already using GetX's .tr extension.
 */

// Patterns to exclude (already internationalized or special cases)
const EXCLUDE_PATTERNS = [
  // Already using .tr
  /\.tr(?!\w)/,
  // Already using .trParams
  /\.trParams\s*\(/,
  // Already using .trPlural
  /\.trPlural\s*\(/,
  // LocaleKeys usage
  /LocaleKeys\.\w+/,
]

// Patterns that indicate this is not user-facing text
const SKIP_CONTENT_PATTERNS = [
  // Import statements
  /^package:/,
  // Asset paths
  /^assets\//,
  // Route paths starting with /
  /^\/[a-z]/i,
  // URLs
  /^https?:\/\//,
  // File extensions only
  /^\.\w{2,4}$/,
  // Pure numbers
  /^\d+$/,
  // Single character
  /^.$/,
  // Empty or whitespace only
  /^\s*$/,
  // Looks like an identifier (camelCase or snake_case)
  /^[a-z][a-zA-Z0-9]*$/,
  /^[a-z][a-z0-9_]*$/,
  // Color codes
  /^#[0-9a-fA-F]{3,8}$/,
  /^0x[0-9a-fA-F]+$/,
  // Date/time formats
  /^[yMdHhms\-\/:\s]+$/,
]

interface StringMatch {
  text: string
  fullText: string
  start: number
  end: number
}

function findAllStrings(code: string): StringMatch[] {
  const matches: StringMatch[] = []
  const seen = new Set<number>()

  // Match single and double quoted strings
  // Handles escaped quotes within strings
  const patterns = [
    /'(?:[^'\\]|\\.)*'/g,
    /"(?:[^"\\]|\\.)*"/g,
  ]

  for (const pattern of patterns) {
    pattern.lastIndex = 0
    let match: RegExpExecArray | null

    while ((match = pattern.exec(code)) !== null) {
      const start = match.index
      if (seen.has(start))
        continue

      seen.add(start)
      const fullText = match[0]
      const text = fullText.slice(1, -1) // Remove quotes

      matches.push({
        text,
        fullText,
        start,
        end: start + fullText.length,
      })
    }
  }

  return matches.sort((a, b) => a.start - b.start)
}

function isAlreadyInternationalized(code: string, stringEnd: number): boolean {
  // Check if the string is followed by .tr or similar
  const afterStr = code.slice(stringEnd, stringEnd + 30)
  
  for (const pattern of EXCLUDE_PATTERNS) {
    if (pattern.test(afterStr))
      return true
  }
  
  return false
}

function shouldSkipContent(text: string): boolean {
  for (const pattern of SKIP_CONTENT_PATTERNS) {
    if (pattern.test(text))
      return true
  }
  return false
}

function isInImportStatement(code: string, position: number): boolean {
  // Find the start of the current line
  let lineStart = position
  while (lineStart > 0 && code[lineStart - 1] !== '\n')
    lineStart--
  
  const lineContent = code.slice(lineStart, position)
  return /^\s*import\s/.test(lineContent)
}

function isInComment(code: string, position: number): boolean {
  // Check if position is inside a comment
  // Look backwards for // or /*
  let i = position
  while (i > 0) {
    if (code[i] === '\n')
      break
    if (code.slice(i, i + 2) === '//')
      return true
    i--
  }
  
  // Check for block comments (simplified)
  const beforeCode = code.slice(0, position)
  const lastBlockStart = beforeCode.lastIndexOf('/*')
  const lastBlockEnd = beforeCode.lastIndexOf('*/')
  
  return lastBlockStart > lastBlockEnd
}

export function detect(
  input: string,
  rules: ExtractionRule[] = DefaultExtractionRules,
  dynamicRules: ExtractionRule[] = DefaultDynamicExtractionsRules,
  userOptions: ExtractionBabelOptions = {},
): DetectionResult[] {
  const detections: DetectionResult[] = []
  const strings = findAllStrings(input)

  for (const str of strings) {
    // Skip if already internationalized
    if (isAlreadyInternationalized(input, str.end))
      continue

    // Skip if in import statement
    if (isInImportStatement(input, str.start))
      continue

    // Skip if in comment
    if (isInComment(input, str.start))
      continue

    // Skip based on content patterns
    if (shouldSkipContent(str.text))
      continue

    // Use the extraction rules to determine if should extract
    if (!shouldExtract(str.text, rules))
      continue

    detections.push({
      text: str.text,
      fullText: str.fullText,
      start: str.start,
      end: str.end,
      fullStart: str.start,
      fullEnd: str.end,
      source: 'dart-string',
    })
  }

  return detections
}

export const languageIds = ['dart']
export const id = 'dart'
