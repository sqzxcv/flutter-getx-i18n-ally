# i18n Ally - Flutter GetX 支持

本项目基于 [i18n-ally](https://github.com/lokalise/i18n-ally) 修改，添加了对 Flutter GetX 本地化方案的支持。

## 修改内容

### 1. 新增 Flutter GetX 框架 (`src/frameworks/flutter-getx.ts`)

支持 GetX 的 `.tr` 扩展进行国际化：

```dart
// 简单翻译
'hello'.tr

// 带参数翻译
'greeting'.trParams({'name': 'John'})

// 复数翻译
'items'.trPlural(count)

// 复数带参数
'items_with_name'.trPluralParams(count, {'name': 'John'})

// LocaleKeys 风格
LocaleKeys.hello.tr
LocaleKeys.home.title.tr
```

### 2. 新增 Dart 字符串提取解析器 (`src/extraction/parsers/dart.ts`)

- 自动检测 Dart 文件中的硬编码字符串
- 过滤已使用 `.tr` 的字符串
- 智能识别需要国际化的文本

### 3. 框架注册

在 `src/frameworks/index.ts` 中注册了新的 `flutter-getx` 框架。

### 4. 配置更新

在 `package.json` 中：
- 添加 `flutter-getx` 到 `enabledFrameworks` 枚举
- 添加 `dart-string` 到 `refactor.templates` 的 source 枚举
- 添加 `flutter`, `getx`, `dart` 关键词

## 使用方法

### 自动检测

当项目的 `pubspec.yaml` 中包含 `get` 或 `get_storage` 依赖时，插件会自动启用 Flutter GetX 框架。

### 手动配置

在 `.vscode/settings.json` 中添加：

```json
{
  "i18n-ally.enabledFrameworks": ["flutter-getx"],
  "i18n-ally.localesPaths": ["lib/locales"],
  "i18n-ally.sourceLanguage": "en",
  "i18n-ally.displayLanguage": "zh"
}
```

### 支持的本地化文件格式

支持所有 i18n-ally 原有的文件格式：
- JSON
- YAML
- Dart (Map 格式)
- 等等

## 保留的原有功能

本修改完整保留了 i18n-ally 的所有原有功能：

- ✅ 翻译引擎设置 (Google, DeepL, Baidu, OpenAI 等)
- ✅ 语言设置 (源语言、显示语言)
- ✅ 侧边栏视图 (翻译树、进度、使用报告等)
- ✅ 行内注释
- ✅ 悬停提示
- ✅ 代码补全
- ✅ 跳转到定义
- ✅ 字符串提取
- ✅ 翻译功能
- ✅ 审阅系统
- ✅ 所有配置选项

## 安装

1. 下载 `i18n-ally-2.13.1.vsix` 文件
2. 在 VSCode 中按 `Ctrl+Shift+P`
3. 输入 "Extensions: Install from VSIX"
4. 选择下载的 `.vsix` 文件

## 文件变更列表

| 文件 | 变更类型 | 描述 |
|------|----------|------|
| `src/frameworks/flutter-getx.ts` | 新增 | Flutter GetX 框架定义 |
| `src/frameworks/index.ts` | 修改 | 注册 Flutter GetX 框架 |
| `src/extraction/parsers/dart.ts` | 新增 | Dart 字符串提取解析器 |
| `src/extraction/parsers/index.ts` | 修改 | 注册 Dart 解析器 |
| `src/core/types.ts` | 修改 | 添加 `dart-string` 检测源类型 |
| `package.json` | 修改 | 添加框架枚举和关键词 |

## 正则表达式说明

Flutter GetX 框架使用以下正则表达式匹配 `.tr` 用法：

```javascript
// 'key'.tr 或 "key".tr
'[\'"`]({key})[\'"`]\\.tr(?!\\w)'

// 'key'.trParams({...})
'[\'"`]({key})[\'"`]\\.trParams\\s*\\('

// 'key'.trPlural(...)
'[\'"`]({key})[\'"`]\\.trPlural\\s*\\('

// 'key'.trPluralParams(...)
'[\'"`]({key})[\'"`]\\.trPluralParams\\s*\\('

// LocaleKeys.xxx.tr
'LocaleKeys\\.({key})\\.tr(?!\\w)'
```

## 重构模板

提取字符串时可选择以下模板：

```dart
'${keypath}'.tr
"${keypath}".tr
'${keypath}'.trParams({})
LocaleKeys.${keypath}.tr
```

## 许可证

MIT License - 与原项目 i18n-ally 保持一致
