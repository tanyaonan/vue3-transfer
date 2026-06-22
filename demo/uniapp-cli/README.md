# UniApp CLI 示例

这是 `vue3-transfer` 的 UniApp 命令行示例，用于验证同一份 SFC 源码可以通过 `uni` 命令编译到 H5 / App / 微信小程序 / 支付宝小程序等平台。

## 技术选型

- **框架**：uni-app + Vue 3
- **UI 库**：Wot UI 2.x（`@wot-ui/ui`）
  - 2026 年社区主流推荐，覆盖 H5、App、微信小程序、支付宝小程序、钉钉小程序等
  - 70+ 移动端组件，支持暗黑模式、国际化、CSS 变量主题
- **示例页面**：`src/pages/index/index.vue`

## 目录结构

```
demo/uniapp-cli/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── manifest.json
│   ├── pages.json
│   ├── App.vue
│   ├── main.ts
│   └── pages/index/index.vue
└── dist/build/h5/   # build:h5 产物
```

## 快速开始

```bash
# 1. 进入示例目录
cd demo/uniapp-cli

# 2. 安装依赖
pnpm install

# 3. 编译到各平台
pnpm exec uni dev:h5
pnpm exec uni dev:mp-weixin
pnpm exec uni dev:app
```

## 打包

```bash
# H5 生产包
pnpm exec uni build h5
# 产物位于 dist/build/h5/
```

## 说明

- `src/pages/index/index.vue` 与浏览器预览文件 `demo/components/counter-uniapp.vue` 为同一份源码。
- 浏览器预览通过 `demo/pages/uniapp.html` 进行，H5 映射层会自动处理 `<view>`、`<text>`、`<button>` 等内置组件。
- 迁移到真实 UniApp 项目时，只需确保已安装 `@wot-ui/ui` 并配置 easycom，即可直接使用 `uni` 命令编译。
- `src/pages.json` 中已配置 Wot UI 的 easycom 规则：
  ```json
  "easycom": {
    "autoscan": true,
    "custom": {
      "^wd-(.*)": "@wot-ui/ui/components/wd-$1/wd-$1.vue"
    }
  }
  ```
- `vite.config.ts` 中已配置 `scss.api: 'modern'`，可消除 Dart Sass legacy JS API 的弃用警告。
