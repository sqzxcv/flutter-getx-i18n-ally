

<p align="center">
<img src="https://github.com/lokalise/i18n-ally/blob/main/screenshots/full-logo-new.png?raw=true" alt="logo" width="450"/>

<p align='center'>
<a href="https://github.com/sqzxcv/flutter-getx-i18n-ally/blob/master/README.md">English</a> | 简体中文
</p>


# Flutter GetX i18n Ally


**Flutter GetX i18n Ally** 是基于 **i18n Ally** 二次开发的 VS Code 插件，专为 **Flutter GetX 多语言（i18n）方案**设计。
插件在 **使用方式和交互体验上完全兼容原版 i18n Ally**，GetX 项目可无缝上手，无需额外学习成本。

### ✨ 主要特性

1. **GetX 框架支持**
   - 在 VS Code 设置中，将 `flutter-getx-i18n-ally.enabledFrameworks` 添加 `flutter-getx`，即可启用 GetX 多语言支持。

2. **自动提取 `.tr` Key**
   - 自动扫描当前 Dart 文件，提取所有使用 `.tr` 的国际化 Key。
   - 支持将 Key 一键翻译为多种语言。

3. **多语言翻译进度可视化**
   - 直观展示各语言的翻译状态：
     - ✅ 已翻译
     - ⬜ 空值
     - ❌ 缺失翻译
   - 支持 **一键补全所有缺失翻译**。

4. **AI 自动翻译支持**
   - 内置多种翻译引擎：
     - Google
     - OpenAI
     - 百度翻译
   - 可在设置中自由选择翻译引擎，并配置对应的 API Key。

5. **灵活的语言文件路径配置**
   - 使用 `flutter-getx-i18n-ally.localesPaths` 指定 GetX 多语言文件所在目录。

6. **可视化多语言管理界面**
   - 提供图形化界面，集中管理所有语言与翻译内容，提升维护效率。

### 🎯 适用场景

- 使用 **Flutter + GetX** 的多语言项目
- 希望获得与 **i18n Ally 一致体验** 的 GetX 国际化开发者
- 需要 **批量翻译 / AI 自动补全翻译** 的团队或个人开发者

---

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/lokalise.i18n-ally.svg?color=blue&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/d/lokalise.i18n-ally.svg?color=4bdbe3" alt="Visual Studio Marketplace Downloads" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/i/lokalise.i18n-ally.svg?color=63ba83" alt="Visual Studio Marketplace Installs" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally" target="__blank"><img src="https://vsmarketplacebadge.apphb.com/trending-monthly/lokalise.i18n-ally.svg?color=a1b858" alt="Marketplace Trending Monthly" /></a>
<br/>
<a href="https://github.com/lokalise/i18n-ally/wiki" target="__blank"><img alt="Wiki" src="https://img.shields.io/static/v1?label=docs&message=wiki&color=e3897b"></a>
<a href="https://github.com/lokalise/i18n-ally" target="__blank"><img src="https://img.shields.io/github/last-commit/lokalise/i18n-ally.svg?color=c977be" alt="GitHub last commit" /></a>
<a href="https://github.com/lokalise/i18n-ally/issues" target="__blank"><img src="https://img.shields.io/github/issues/lokalise/i18n-ally.svg?color=a38eed" alt="GitHub issues" /></a>
<a href="https://github.com/lokalise/i18n-ally" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/lokalise/i18n-ally?style=social"></a>
</p>

<p align='center'>
<b>v2.0</b> 已更新，伴随新的 <a href='https://github.com/lokalise/i18n-ally/wiki/Migration-v1.x'>可视化编辑器</a> 和 <a href='https://github.com/lokalise/i18n-ally/wiki/Review-System'>审阅系统</a> 🎉
</p>

<p align='center'><i>
<a href="https://github.com/lokalise/i18n-ally/wiki/Migration-v1.x">从 v1.x 迁移到 v2.0</a>
</i></p>
<br>

<p align='center'><b>
🚧 请注意，中文文档仅供参考，非实时更新。可能会与英文版有所出入，如有歧义，一切请以<a href="https://github.com/lokalise/i18n-ally/blob/master/README.md">英文文档</a>为主。
</b></p>

<br>


<p align="center">
<a href='https://github.com/lokalise/i18n-ally/wiki/Supported-Frameworks' target="__blank">
<img src="https://github.com/lokalise/i18n-ally/blob/screenshots/supported-frameworks.png?raw=true" alt="Supported Frameworks" width="500"/>
</a>
</p>

-----

<details>
<summary align='center'><b>⚡️ 截图和功能</b></summary>

<h3 align='center'>内联提示</h3>

![](https://github.com/lokalise/i18n-ally/blob/screenshots/annotation-animated.gif?raw=true)

<h3 align='center'>悬浮窗和快捷操作</h3>

![](https://github.com/lokalise/i18n-ally/blob/screenshots/hover.png?raw=true)

<h3 align='center'>统一管理所有翻译</h3>

![](https://github.com/lokalise/i18n-ally/blob/screenshots/review-sidebar.png?raw=true)

<h3 align='center'><a href='https://github.com/lokalise/i18n-ally/wiki/Editor-UI'>可视化编辑器</a> 和 <a href='https://github.com/lokalise/i18n-ally/wiki/Review-&-Collaboration-System'>审阅系统</a></h3>

![](https://github.com/lokalise/i18n-ally/blob/screenshots/review-editor.png?raw=true)

<h3 align='center'>从代码中提取文案</h3>

![](https://github.com/lokalise/i18n-ally/blob/screenshots/extract.png?raw=true)

<h3 align='center'>缺失文案报告</h3>

![](https://github.com/lokalise/i18n-ally/blob/screenshots/problems.png?raw=true)

<h3 align='center'>机器翻译</h3>

![](https://github.com/lokalise/i18n-ally/blob/screenshots/quick-actions.png?raw=true)

<h3 align='center'>JSON 和 YAML 的内联提示</h3>

![](https://github.com/lokalise/i18n-ally/blob/screenshots/annotation-locale.png?raw=true)

<h3 align="center"> 其他功能 </h3>

- 支持多目录工作区
- 支持远程开发 (Remote Development)
- 支持大多数流行框架
- 插件自身多语言支持 [翻译列表](https://github.com/lokalise/i18n-ally#-multilingual-support)

</details>

-----

## 📖 文档

[查看维基](https://github.com/lokalise/i18n-ally/wiki)!


## 💭 常见问题

[常见问题](https://github.com/lokalise/i18n-ally/wiki/FAQ).


## 📜 支持文件格式

[支持的文件格式](https://github.com/lokalise/i18n-ally/wiki/Supported-Locale-Formats).


## ❤️ 感谢

本插件最初来源于 [think2011/vscode-vue-i18n](https://github.com/think2011/vscode-vue-i18n)，非常感谢 [@think2011](https://github.com/think2011) 的启发。

Vue SFC 的支持来自于 vue-i18n 的作者 [kazupon](https://github.com/kazupon) 的 [kazupon/vue-i18n-locale-message](https://github.com/kazupon/vue-i18n-locale-message)。感谢提供的帮助!

同时也十分感谢所有这些很棒的 [贡献者](https://github.com/lokalise/i18n-ally/graphs/contributors) 和看到这里的你。


## 📄 License

[MIT License](https://github.com/lokalise/i18n-ally/blob/master/LICENSE) © 2021 年至今 [Lokalise Inc.](https://github.com/lokalise)

MIT License © 2019-2020 [Anthony Fu](https://github.com/antfu)

MIT License © 2018-2019 [think2011](https://github.com/think2011)
