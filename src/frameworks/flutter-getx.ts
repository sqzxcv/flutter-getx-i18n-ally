import { Framework } from './base'
import { LanguageId } from '~/utils'

/**
 * Flutter GetX Framework
 *
 * Supports GetX's .tr extension for internationalization:
 * - 'key'.tr
 * - 'key'.trParams({...})
 * - 'key'.trPlural(count)
 * - 'key'.trPluralParams(count, {...})
 * - LocaleKeys.key.tr
 */
class FlutterGetXFramework extends Framework {
  id = 'flutter-getx'
  display = 'Flutter (GetX)'

  detection = {
    pubspecYAML: [
      'get',
      'get_storage',
    ],
  }

  languageIds: LanguageId[] = [
    'dart',
  ]

  // Regex patterns for GetX .tr usage
  // for visualize the regex, you can use https://regexper.com/
  usageMatchRegex = [
    // Match triple-quoted strings (highest priority - Dart multiline strings)
    // Must come first to prevent single/double quote patterns from matching inside
    'r?"""([\\s\\S]*?)"""\\.tr(?!\\w)',
    'r?"""([\\s\\S]*?)"""\\.trParams\\s*\\(',
    'r?"""([\\s\\S]*?)"""\\.trPlural\\s*\\(',
    'r?"""([\\s\\S]*?)"""\\.trPluralParams\\s*\\(',

    "r?'''([\\s\\S]*?)'''\\.tr(?!\\w)",
    "r?'''([\\s\\S]*?)'''\\.trParams\\s*\\(",
    "r?'''([\\s\\S]*?)'''\\.trPlural\\s*\\(",
    "r?'''([\\s\\S]*?)'''\\.trPluralParams\\s*\\(",

    // Match 'key'.tr - single quoted strings followed by .tr methods
    "r?'([^']*)'\\.tr(?!\\w)",
    "r?'([^']*)'\\.trParams\\s*\\(",
    "r?'([^']*)'\\.trPlural\\s*\\(",
    "r?'([^']*)'\\.trPluralParams\\s*\\(",

    // Match "key".tr - double quoted strings followed by .tr methods
    'r?"([^"]*)"\\.tr(?!\\w)',
    'r?"([^"]*)"\\.trParams\\s*\\(',
    'r?"([^"]*)"\\.trPlural\\s*\\(',
    'r?"([^"]*)"\\.trPluralParams\\s*\\(',

    // Match LocaleKeys.xxx.tr pattern
    'LocaleKeys\\.({key})\\.tr(?!\\w)',
  ]

  refactorTemplates(keypath: string) {
    return [
      `'${keypath}'.tr`,
      `"${keypath}".tr`,
      `'${keypath}'.trParams({})`,
      `LocaleKeys.${keypath}.tr`,
      keypath,
    ]
  }

  // Enable auto extraction support
  supportAutoExtraction = ['dart']
}

export default FlutterGetXFramework
