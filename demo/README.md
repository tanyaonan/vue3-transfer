# Demo 目录说明

本目录包含 `vue3-transfer` 的浏览器端演示，展示如何把 Vue SFC / React JSX 源码在浏览器中编译并挂载到 DOM。

## 目录结构

```
demo/
├── components/          演示组件源码
│   ├── counter.vue      Vue + Element Plus 计数器示例
│   └── counter.jsx      React + Ant Design 计数器示例
├── pages/               演示页面（通过 HTTP 服务访问）
│   ├── index.html       Vue 直接渲染到 DOM（renderVueToDOM + mount）
│   ├── vue-mount.html   Vue 编译为组件后手动 createApp 挂载
│   └── react.html       React 直接渲染到 DOM（renderReactToDOM + mount）
├── vendor/              Vite 打包后的第三方依赖产物
│   ├── vue/             Vue / Element Plus 运行时与按需 chunk
│   └── react/           React / ReactDOM / Ant Design 运行时与按需 chunk
└── vendor-src/          vendor 打包入口与 Vite 配置源码
    ├── vue/
    │   ├── entry.ts
    │   └── vite.config.ts
    └── react/
        ├── entry.ts
        └── vite.config.ts
```

## 本地预览

```bash
pnpm build
pnpm build:vendor
pnpm build:vendor-react

# 启动本地静态服务
python3 -m http.server 8767
```

访问地址：

- Vue 直接渲染：`http://localhost:8767/demo/pages/index.html`
- Vue 应用挂载：`http://localhost:8767/demo/pages/vue-mount.html`
- React 直接渲染：`http://localhost:8767/demo/pages/react.html`

## 命名规范

- 文件夹：小写、短横线连接（kebab-case），按职责分组（`components`、`pages`、`vendor`、`vendor-src`）。
- 文件：演示组件使用小写（`counter.vue`、`counter.jsx`），配置文件保持 `vite.config.ts` 标准命名。
- 产物目录：`vendor/<framework>/`，与源码目录 `vendor-src/<framework>/` 一一对应，避免构建时清空源码。
