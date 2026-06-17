# vue3-transfer

在浏览器中把 Vue 3 单文件组件（SFC）源码转换为纯 JavaScript。

## 特性

- Vue 3.6.0-beta.15 编译器
- Vite 8（底层 Rolldown）
- TypeScript
- pnpm
- 仅输出 ES Module
- 异步按需加载：编译器和 Vue runtime 在调用函数时才加载
- 浏览器优先：不依赖 Node.js 运行时
- 无需 import map：Vue runtime 已打包在内
- 默认开启 Vapor 模式：直接操作 DOM，接近原生性能

## 安装

```bash
pnpm install
```

## 构建

```bash
pnpm build
```

## 使用

### 仅转换代码

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

### 直接渲染到 DOM

```ts
import { renderVueToDOM } from 'vue3-transfer'

const { app, style } = await renderVueToDOM(source, '#app')

// 需要时清理，避免样式泄漏
app.unmount()
style?.remove()
```

> 注意：`<script>` 块请使用纯 JavaScript。

## API

### `transformVueToJS(source, options?)`

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `filename` | `string` | `'App.vue'` | 源文件名 |
| `isProduction` | `boolean` | `false` | 是否生产模式 |
| `styleMode` | `'inject' \| 'inline' \| 'none'` | `'inject'` | `<style>` 块的处理方式 |
| `vapor` | `boolean` | `true` | 是否编译为直接 DOM 操作 |

返回 `Promise<TransformResult>`，包含 `code`、可选的 `css` 和 `errors`。

### `renderVueToDOM(source, container, options?)`

| 参数 | 类型 | 说明 |
|------|------|------|
| `source` | `string` | Vue SFC 源码 |
| `container` | `string \| Element` | CSS 选择器或 DOM 元素 |
| `options` | `TransformOptions` | 与 `transformVueToJS` 相同 |

返回 `Promise<RenderResult>`，包含 `app` 和注入的 `<style>` 元素 `style`。

## 示例

构建后直接在浏览器中打开 `demo.html`，无需 import map 或外部 Vue 脚本。

```bash
pnpm build
# 启动静态服务器，例如
python3 -m http.server 8767
# 打开 http://localhost:8767/demo.html
```
