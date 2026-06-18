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

> 注意：`<script>` 块目前只支持纯 JavaScript，不支持 TypeScript，因为本库设计为在浏览器中运行。

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

清空 IndexedDB 编译缓存。

## 性能

- **按需加载**：`vue3-transfer.js` 仅约 6.5 kB。Vue 运行时（~608 kB）和编译器（~1.58 MB）作为独立 chunk，首次使用时异步加载。
- **编译缓存**：相同源码 + 选项再次编译时，直接从 IndexedDB 读取，页面刷新后仍然有效。
- **内存可控**：编译结果持久化到磁盘，不占用运行时内存；重量级的编译器和运行时模块只加载一次并共享。
- **自动过期**：缓存条目默认 1 天过期，过期后下次访问会自动清理。

## 演示

构建后通过本地静态服务打开 `demo/index.html`。由于 demo 使用 `fetch` 加载 `demo/Counter.vue`，需要通过 HTTP 服务访问。

`demo/vendor/` 目录下是 Vite 打包好的 Vue 运行时本地副本（`vendor.js`），避免 demo 运行时访问 CDN。Element Plus 组件和样式按组件拆分成独立 chunk，浏览器只加载当前 SFC 实际用到的组件和对应样式。

```bash
pnpm build
pnpm build:vendor
# 启动本地静态服务，例如：
python3 -m http.server 8767
# 打开 http://localhost:8767/demo/
```

> 若 SFC 使用了未在 `demo/vendor-entry.ts` 的 `componentRegistry` 中注册的组件，需先补充映射再执行 `pnpm build:vendor`。
