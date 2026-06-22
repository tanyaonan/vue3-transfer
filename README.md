# vue3-transfer

在浏览器中直接把 Vue 3 SFC 源码转换成纯 JavaScript。

## 特性

- Vue 3.6.0-beta.15 编译器
- Vite 8（底层 Rolldown）
- TypeScript
- pnpm
- 浏览器优先：不依赖 Node.js 运行时
- 默认开启 Vapor 模式（直接操作 DOM，接近原生性能）
- IndexedDB 持久化编译缓存（可配置）
- 按需加载：编译器和 Vue 运行时首次使用时才加载

## 安装

```bash
pnpm install
```

## 构建

```bash
pnpm build
```

## 使用

### 仅转换

```ts
import { transformVueToJS } from 'vue3-transfer'

const source = `
<template>
  <div class="hello">{{ msg }}</div>
</template>

<script setup>
defineProps({ msg: String })
</script>

<style scoped>
.hello { color: red; }
</style>
`

const result = await transformVueToJS(source, {
  filename: 'Hello.vue',
  styleMode: 'inline',
})

console.log(result.code)
```

### 编译为可挂载组件

```ts
import { renderVueToDOM } from 'vue3-transfer'

const rendered = await renderVueToDOM(source, { filename: 'Hello.vue' })

// 方式一：拿到组件给现有 Vue 3 项目使用
const MyComponent = rendered.component

// 方式二：预览场景直接挂载
rendered.mount('#app')

// 方式三：挂载时安装 Vue 插件
rendered.mount('#app', {
  plugins: [SomePlugin],
})

// 方式四：转换时把 `import { X } from 'some-lib'` 映射到全局变量
const rendered = await renderVueToDOM(source, {
  filename: 'Counter.vue',
  globals: {
    'some-lib': 'SomeLibGlobal',
  },
})

// 卸载并清理样式
rendered.unmount()
```

### React 动态渲染

React 版本与 Vue 版本保持统一入口：

```ts
import { renderReactToDOM } from 'vue3-transfer/react'

const source = `
import { useState } from 'react'
import { Button, Card, Space, Tag, message } from 'antd'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Card title="React Transfer Demo">
      <Tag color="success">Ant Design</Tag>
      <div>Count: {count}</div>
      <Space>
        <Button type="primary" onClick={() => setCount(c => c + 1)}>+1</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </Space>
    </Card>
  )
}
`

const rendered = await renderReactToDOM(source, {
  filename: 'Counter.jsx',
  globals: { 'antd': 'antd' },
})

rendered.mount('#root')
```

> 注意：
> - React 版本默认使用 **React 19** 与 **自动 JSX 运行时**（`react/jsx-runtime`）。
> - React 源码为 JSX/ESM，`<script>` 块同样只支持纯 JavaScript。
> - 使用第三方组件库时，需要在 `globals` 中把裸模块导入映射到全局变量（如 `antd` -> `window.antd`），
>   并在挂载前将对应库暴露到 `window` 上。
> - 如果你想让 `renderReactToDOM` 使用外部 React（而不是库内置的 React chunk），
>   请同时把 `React`、`ReactDOM`、`ReactJSXRuntime` 暴露到 `window`。

## API

### `transformVueToJS(source, options)`

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `filename` | `string` | - | **必填**，源文件标识，用于缓存、错误报告和 scoped style |
| `isProduction` | `boolean` | `false` | 是否生产模式 |
| `styleMode` | `'inject' \| 'inline' \| 'none'` | `'inject'` | `<style>` 块的处理方式 |
| `vapor` | `boolean` | `true` | 是否编译为直接 DOM 操作 |
| `useCache` | `boolean` | `true` | 是否使用 IndexedDB 编译缓存 |
| `globals` | `Record<string, string>` | `undefined` | 将裸模块命名导入映射到全局变量 |

返回 `Promise<TransformResult>`，包含 `code`、可选的 `css` 和 `errors`。

### `renderVueToDOM(source, options)`

| 参数 | 类型 | 说明 |
|------|------|------|
| `source` | `string` | Vue SFC 源码 |
| `options` | `TransformOptions` | **必填**，与 `transformVueToJS` 相同 |

返回 `Promise<RenderableComponent>`：

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| `component` | `Component` | 编译后的 Vue 组件，可直接用于其他 Vue 3 应用 |
| `style` | `HTMLStyleElement \| null` | 编译后的样式元素，挂载时自动注入 |
| `mount(container, options?)` | `(string \| Element, MountOptions?) => App<Element>` | 挂载到指定容器，可选安装插件 |
| `unmount()` | `() => void` | 卸载组件并移除注入的样式 |

### `MountOptions`

| 选项 | 类型 | 说明 |
|------|------|------|
| `plugins` | `Plugin[]` | 挂载前依次调用的 Vue 插件，通过 `app.use(plugin)` 安装 |

### `clearCompileCache()`

清空 IndexedDB 编译缓存（Vue 与 React 共享同一个缓存库）。

### `transformReactToJS(source, options)`

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `filename` | `string` | - | **必填**，源文件标识，用于缓存和错误报告 |
| `isProduction` | `boolean` | `false` | 是否生产模式 |
| `styleMode` | `'inject' \| 'inline' \| 'none'` | `'inject'` | 保留与 Vue 接口一致，React 源码通常不生成 CSS |
| `useCache` | `boolean` | `true` | 是否使用 IndexedDB 编译缓存 |
| `globals` | `Record<string, string>` | `undefined` | 将裸模块命名导入映射到全局变量 |

返回 `Promise<ReactTransformResult>`，包含 `code`、可选的 `css` 和 `errors`。

### `renderReactToDOM(source, options)`

| 参数 | 类型 | 说明 |
|------|------|------|
| `source` | `string` | React JSX 源码 |
| `options` | `ReactTransformOptions` | **必填**，与 `transformReactToJS` 相同 |

返回 `Promise<RenderableReactComponent>`：

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| `component` | `ComponentType` | 编译后的 React 组件，可直接用于其他 React 应用 |
| `style` | `HTMLStyleElement \| null` | 编译后的样式元素（React 源码通常没有） |
| `mount(container, options?)` | `(string \| Element, ReactMountOptions?) => Root` | 挂载到指定容器，可选开启 StrictMode |
| `unmount()` | `() => void` | 卸载组件并移除注入的样式 |

### `ReactMountOptions`

| 选项 | 类型 | 说明 |
|------|------|------|
| `strictMode` | `boolean` | 是否在 `React.StrictMode` 下渲染 |

## 性能

- **按需加载**：`vue3-transfer.js` 仅约 6.5 kB。Vue 运行时（~608 kB）和编译器（~1.58 MB）作为独立 chunk，首次使用时异步加载。
- **编译缓存**：相同源码 + 选项再次编译时，直接从 IndexedDB 读取，页面刷新后仍然有效。
- **内存可控**：编译结果持久化到磁盘，不占用运行时内存；重量级的编译器和运行时模块只加载一次并共享。
- **自动过期**：缓存条目默认 1 天过期，过期后下次访问会自动清理。

## 演示

构建后通过本地静态服务打开 `demo/index.html` 或 `demo/react.html`。由于 demo 使用 `fetch` 加载 `demo/Counter.vue` / `demo/Counter.jsx`，需要通过 HTTP 服务访问。

`demo/vendor/` 目录下是 Vite 打包好的 Vue 运行时本地副本（`vendor.js`），避免 demo 运行时访问 CDN。Element Plus 组件和样式按组件拆分成独立 chunk，浏览器只加载当前 SFC 实际用到的组件和对应样式。

`demo/vendor-react/` 目录下是 Vite 打包好的 React 19 + ReactDOM + Ant Design 本地副本（`vendor.js`）。代码分割策略如下：

- `chunks/shared/core.js`：React / ReactDOM / JSX 运行时 / Scheduler 及少量通用第三方依赖。
- `chunks/shared/antd-core.js`：Ant Design 公共基础设施（`_util`、`config-provider`、`locale`、`style` 等）。
- `chunks/antd/<component>.js`：每个 Ant Design 组件独立 chunk，按 JSX 中实际使用的组件按需加载。

所有 chunk 均使用语义化命名，不会出现 `1.js`、`2.js` 等数字后缀。

```bash
pnpm build
pnpm build:vendor
pnpm build:vendor-react
# 启动本地静态服务，例如：
python3 -m http.server 8767
# Vue 示例：http://localhost:8767/demo/index.html
# React 示例：http://localhost:8767/demo/react.html
```

> 若 SFC / JSX 使用了未在对应 `componentRegistry` 中注册的组件，需先补充映射再重新执行 `pnpm build:vendor` 或 `pnpm build:vendor-react`。
