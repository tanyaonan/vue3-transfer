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
import { Button, Tag, message } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 420px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`

const Display = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin: 24px 0;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <Header>
        <Title>Ant Design Counter</Title>
        <Tag color="success">React Transfer Demo</Tag>
      </Header>
      <Display>Count: {count}</Display>
      <Actions>
        <Button type="primary" onClick={() => setCount(c => c + 1)}>+1</Button>
        <Button onClick={() => setCount(c => c - 1)}>-1</Button>
        <Button onClick={() => { setCount(0); message.info('Count 已重置') }}>Reset</Button>
      </Actions>
    </Wrapper>
  )
}
`

const rendered = await renderReactToDOM(source, {
  filename: 'Counter.jsx',
  globals: {
    'antd': 'antd',
    'styled-components': 'styled',
  },
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

### React 样式与样式隔离

React 源码是 JSX/ESM，没有 Vue SFC 的 `<style scoped>` 块，因此样式隔离需要自行处理。

#### 推荐：styled-components（在 JSX 中直接管理）

示例 `demo/components/counter.jsx` 使用真正的 **styled-components**，把组件和样式写在一起：

```jsx
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 420px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`

export default function Counter() {
  return <Wrapper>...</Wrapper>
}
```

在浏览器编译场景下，需要先把 `styled-components` 打包进 vendor，并暴露到 `window`：

```ts
renderReactToDOM(source, {
  filename: 'Counter.jsx',
  globals: {
    'antd': 'antd',
    'styled-components': 'styled',
  },
})
```

`renderReactToDOM` 会自动把源码中的 `import styled from 'styled-components'` 改写为 `const styled = window.styled`，因此写法与真正的 styled-components 完全一致，支持：

- `styled.div`、`styled.span` 等标签函数
- 模板字符串 CSS
- `&` 嵌套选择器
- `css`、`keyframes` 等命名导出（通过 `import { css } from 'styled-components'`）
- props 驱动动态样式（如 `color: ${props => props.primary ? 'red' : 'blue'}`）

#### 其他可选方案

- **Tailwind CSS**：2026 年绿色项目中最流行的工具类方案，零运行时，但需要在宿主项目中引入 Tailwind 构建流程。
- **零运行时 CSS-in-TS**（如 `vanilla-extract`、`Panda CSS`、`StyleX`）：适合设计系统，提供类型安全和设计令牌，但需要额外依赖和构建配置。
- **CSS Modules**：如果项目已配置构建工具，仍可使用；但在浏览器即时编译场景下需要额外的 CSS 文件加载支持。

> 当前 `renderReactToDOM` 返回的 `style` 字段通常为 `null`；
> 使用 styled-components 时，样式由 styled-components 运行时自动注入和管理。

### UniApp 动态渲染

UniApp 版本与 Vue / React 版本保持统一入口：

```ts
import { renderUniAppToDOM } from 'vue3-transfer/uniapp'

const source = `
<template>
  <view class="counter-page">
    <wd-card title="Wot UI Counter">
      <view class="card-header">
        <text>UniApp Transfer Demo</text>
        <wd-tag type="primary">H5 / App / 小程序</wd-tag>
      </view>
      <view class="count-display">
        <text>Count: {{ count }}</text>
      </view>
      <view class="actions">
        <wd-button type="primary" @click="count++">+1</wd-button>
        <wd-button type="info" @click="reset">Reset</wd-button>
      </view>
    </wd-card>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
function reset() {
  count.value = 0
  uni.showToast({ title: '已重置', icon: 'none' })
}
</script>
`

const rendered = await renderUniAppToDOM(source, {
  filename: 'Counter.vue',
  platform: 'h5',
})

rendered.mount('#app')
```

> 注意：
> - UniApp 版本默认关闭 Vapor 模式，编译产物保留虚拟 DOM 语义，可迁移到 App、微信小程序、支付宝小程序等平台。
> - 浏览器预览时会自动注入 `<view>`、`<text>`、`<button>` 等内置组件的 H5 映射，以及最小化 `uni` API 存根。
> - 示例使用 **Wot UI 2.x**（`@wot-ui/ui`）作为移动端组件库：2026 年社区推荐，覆盖 H5、App、微信小程序、支付宝小程序、钉钉小程序等 70+ 组件。
> - 同一份源码已放在 `demo/uniapp-cli/pages/index/index.vue`，可按 `demo/uniapp-cli/README.md` 使用 `uni` 命令编译到各平台。

## UniApp H5 运行时对齐

浏览器端预览时，`renderUniAppToDOM` 会注入一组与真实 UniApp H5 产物对齐的运行时组件和 `uni` API 存根，保证同一套 SFC 在本地预览与真机 H5 表现一致。

### 内置组件

| 组件 | 对齐要点 |
|------|----------|
| `<view>` | `hoverClass` 默认 `none`，支持 `hover-stop-propagation` |
| `<text>` | `\n` 换行渲染为 `<br>`，`selectable` 通过 CSS 控制，移除内联 `user-select` |
| `<button>` | 仅保留标准 `type` / `size`，移除非标准的样式 class；`loading` 使用真实动画 |
| `<input>` | 占位符使用独立 `<div class="uni-input-placeholder">`，不再透传到 `<input>`；`placeholder-style` 中的 `rpx` 按 `1rpx = 1/32rem` 转换；`number/digit/tel` 的 `inputmode` / `step` 与真实 H5 一致；统一 `autocomplete="off"` |
| `<image>` | 默认 `draggable=false`，移除非标准的 `mode` class，事件对象结构与 H5 一致 |

### 弹窗与反馈

- `uni.showToast` / `uni.showLoading` / `uni.hideToast` / `uni.hideLoading`
  - 图标 SVG 路径取自真实 UniApp H5 bundle。
  - `icon: 'error'` 已支持，图标填充色跟随系统亮/暗模式。
  - `mask: true` 时遮罩为透明且阻止 `touchmove` 穿透。
- `uni.showModal`
  - 按钮使用 `<div>` 而非 `<a>`，与真实 H5 DOM 一致。
  - 每次调用都会把状态重置为默认值再合并当前 `options`，连续调用不会串状态。
  - `editable` 模式下使用 `<textarea rows="1" class="uni-modal__textarea">`，输入内容在弹窗打开时重置为当前 `content`。
  - 弹窗及内容区阻止 `touchmove` 穿透。

### 网络、存储与导航

- `uni.request`：支持 `abort`、超时、`success` / `fail` / `complete`。
- `uni.setStorageSync` / `getStorageSync` / `removeStorageSync` / `clearStorageSync`：基于 `localStorage` 的同步存根。
- `uni.navigateTo` / `redirectTo` / `switchTab` / `reLaunch`：基于 `console.warn` 的导航占位，便于本地预览时验证调用参数。
- `uni.getSystemInfoSync` / `uni.getSystemInfo`：返回 `platform`、`windowWidth`、`windowHeight`、`pixelRatio` 等常用字段。
- `uni.$on` / `uni.$emit` / `uni.$off`：全局事件总线存根。

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

构建后通过本地静态服务打开 `demo/pages/index.html`、`demo/pages/vue-mount.html`、`demo/pages/react.html` 或 `demo/pages/uniapp.html`。由于 demo 使用 `fetch` 加载 `demo/components/counter.vue` / `demo/components/counter.jsx` / `demo/components/counter-uniapp.vue`，需要通过 HTTP 服务访问。

`demo/vendor/vue/` 目录下是 Vite 打包好的 Vue 运行时本地副本（`vendor.js`），避免 demo 运行时访问 CDN。Element Plus 组件和样式按组件拆分成独立 chunk，浏览器只加载当前 SFC 实际用到的组件和对应样式。

`demo/vendor/react/` 目录下是 Vite 打包好的 React 19 + ReactDOM + Ant Design 本地副本（`vendor.js`）。代码分割策略如下：

- `chunks/shared/core.js`：React / ReactDOM / JSX 运行时 / Scheduler 及少量通用第三方依赖。
- `chunks/shared/antd-core.js`：Ant Design 公共基础设施（`_util`、`config-provider`、`locale`、`style` 等）。
- `chunks/antd/<component>.js`：每个 Ant Design 组件独立 chunk，按 JSX 中实际使用的组件按需加载。

所有 chunk 均使用语义化命名，不会出现 `1.js`、`2.js` 等数字后缀。

```bash
pnpm build
pnpm build:vendor
pnpm build:vendor-react
pnpm build:vendor-uniapp
# 启动本地静态服务，例如：
python3 -m http.server 8767
# Vue 直接渲染示例：http://localhost:8767/demo/pages/index.html
# Vue 应用挂载示例：http://localhost:8767/demo/pages/vue-mount.html
# React 直接渲染示例：http://localhost:8767/demo/pages/react.html
# UniApp H5 渲染示例：http://localhost:8767/demo/pages/uniapp.html
```

> 若 SFC / JSX 使用了未在对应 `componentRegistry` 中注册的组件，需先补充映射再重新执行 `pnpm build:vendor`、`pnpm build:vendor-react` 或 `pnpm build:vendor-uniapp`。
