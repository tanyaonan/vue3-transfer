# vue3-transfer

Transform Vue 3 SFC source into plain JavaScript **directly in the browser**.

## Features

- Vue 3.6.0-beta.15 compiler
- Vite 8 (powered by Rolldown)
- TypeScript
- pnpm
- ES module only output
- Async loading / code splitting: compiler and Vue runtime are loaded on demand
- Browser-first: no Node.js runtime dependency
- No import map required: Vue runtime is bundled in
- Vapor mode by default (direct DOM operations, near-native performance)

## Install

```bash
pnpm install
```

## Build

```bash
pnpm build
```

## Usage

### Transform only

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

### Render directly to DOM

```ts
import { renderVueToDOM } from 'vue3-transfer'

await renderVueToDOM(source, '#app')
```

> Note: `<script>` blocks should be plain JavaScript. TypeScript is not handled because this library is designed to run in the browser.

## API

### `transformVueToJS(source, options?)`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `filename` | `string` | `'App.vue'` | Source filename |
| `isProduction` | `boolean` | `false` | Production mode |
| `styleMode` | `'inject' \| 'inline' \| 'none'` | `'inject'` | How to handle `<style>` blocks |
| `vapor` | `boolean` | `true` | Compile to direct DOM operations |

Returns `Promise<TransformResult>` with `code`, optional `css`, and `errors`.

### `renderVueToDOM(source, container, options?)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | `string` | Vue SFC source |
| `container` | `string \| Element` | CSS selector or DOM element to mount on |
| `options` | `TransformOptions` | Same options as `transformVueToJS` |

Returns `Promise<App<Element>>`.

## Demo

Open `demo.html` in a browser after building. No import map or external Vue script is required.

```bash
pnpm build
# serve the project root, e.g.
python3 -m http.server 8767
# open http://localhost:8767/demo.html
```
