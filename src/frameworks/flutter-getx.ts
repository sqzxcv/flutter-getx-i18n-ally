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
    // Match 'key'.tr or "key".tr (simple .tr)
    '[\'"`](.*?)[\'"`]\\.tr(?!\\w)',

    // Match 'key'.trParams({...})
    '[\'"`](.*?)[\'"`]\\.trParams\\s*\\(',

    // Match 'key'.trPlural(...)
    '[\'"`](.*?)[\'"`]\\.trPlural\\s*\\(',

    // Match 'key'.trPluralParams(...)
    '[\'"`](.*?)[\'"`]\\.trPluralParams\\s*\\(',

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
