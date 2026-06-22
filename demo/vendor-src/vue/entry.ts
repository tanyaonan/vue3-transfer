/// <reference types="vite/client" />

export * as Vue from 'vue'

interface ComponentMeta {
  /** Element Plus 组件目录名，例如 button、card */
  path: string
}

/**
 * 支持的 Element Plus 组件映射表。
 * key 为模板中使用的标签名（短横线）或 JS 中使用的组件名（PascalCase），
 * value 为组件在 element-plus/es/components 下的目录名。
 */
const componentRegistry: Record<string, ComponentMeta> = {
  // 基础组件
  'el-button': { path: 'button' },
  'el-button-group': { path: 'button-group' },
  'el-icon': { path: 'icon' },
  'el-link': { path: 'link' },
  'el-text': { path: 'text' },
  'el-container': { path: 'container' },
  'el-header': { path: 'container' },
  'el-aside': { path: 'container' },
  'el-main': { path: 'container' },
  'el-footer': { path: 'container' },

  // 布局
  'el-row': { path: 'row' },
  'el-col': { path: 'col' },

  // 表单
  'el-form': { path: 'form' },
  'el-form-item': { path: 'form' },
  'el-input': { path: 'input' },
  'el-select': { path: 'select' },
  'el-option': { path: 'select' },
  'el-option-group': { path: 'select' },
  'el-checkbox': { path: 'checkbox' },
  'el-checkbox-group': { path: 'checkbox' },
  'el-checkbox-button': { path: 'checkbox' },
  'el-radio': { path: 'radio' },
  'el-radio-group': { path: 'radio' },
  'el-radio-button': { path: 'radio' },
  'el-switch': { path: 'switch' },
  'el-slider': { path: 'slider' },
  'el-date-picker': { path: 'date-picker' },
  'el-time-picker': { path: 'time-picker' },
  'el-time-select': { path: 'time-select' },

  // 数据展示
  'el-table': { path: 'table' },
  'el-table-column': { path: 'table' },
  'el-card': { path: 'card' },
  'el-tag': { path: 'tag' },
  'el-badge': { path: 'badge' },
  'el-avatar': { path: 'avatar' },
  'el-image': { path: 'image' },
  'el-pagination': { path: 'pagination' },
  'el-progress': { path: 'progress' },
  'el-empty': { path: 'empty' },
  'el-descriptions': { path: 'descriptions' },
  'el-descriptions-item': { path: 'descriptions' },
  'el-list': { path: 'list' },
  'el-list-item': { path: 'list' },

  // 反馈
  'el-dialog': { path: 'dialog' },
  'el-drawer': { path: 'drawer' },
  'el-popover': { path: 'popover' },
  'el-tooltip': { path: 'tooltip' },
  'el-alert': { path: 'alert' },
  'el-loading': { path: 'loading' },
  'el-message': { path: 'message' },
  'el-message-box': { path: 'message-box' },
  'el-notification': { path: 'notification' },

  // 导航
  'el-menu': { path: 'menu' },
  'el-menu-item': { path: 'menu' },
  'el-sub-menu': { path: 'menu' },
  'el-tabs': { path: 'tabs' },
  'el-tab-pane': { path: 'tabs' },
  'el-breadcrumb': { path: 'breadcrumb' },
  'el-breadcrumb-item': { path: 'breadcrumb' },
  'el-dropdown': { path: 'dropdown' },
  'el-dropdown-menu': { path: 'dropdown' },
  'el-dropdown-item': { path: 'dropdown' },
  'el-steps': { path: 'steps' },
  'el-step': { path: 'steps' },
}

function kebabCase(name: string): string {
  return name.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()).replace(/^-/, '')
}

function resolveComponentPath(name: string): string | undefined {
  const kebab = kebabCase(name)
  const meta = componentRegistry[kebab]
  if (meta) {
    return meta.path
  }

  // 处理 ElButtonGroup -> button-group 的二次推导
  if (name.startsWith('El')) {
    const tag = kebabCase(name)
    return componentRegistry[tag]?.path
  }

  return undefined
}

/**
 * 从 Vue SFC 源码中提取需要按需加载的 Element Plus 组件引用。
 *
 * 识别规则：
 * 1. 模板中以 el- 开头的标签名（不区分大小写）
 * 2. import { ... } from 'element-plus' 中的命名导入
 */
export function resolveElementPlusTags(source: string): string[] {
  const tags = new Set<string>()

  // <el-xxx> 标签
  const tagMatches = source.matchAll(/<\s*(el-[\w-]+)/gi)
  for (const m of tagMatches) {
    tags.add(m[1])
  }

  // self-closing 标签或闭合标签开头 <el-xxx />
  const selfClosingMatches = source.matchAll(/<\s*(el-[\w-]+)\s*\/?>/gi)
  for (const m of selfClosingMatches) {
    tags.add(m[1])
  }

  // import { ElButton, ElCard } from 'element-plus'
  const importMatches = source.matchAll(
    /import\s+\{([^}]+)\}\s+from\s+['"]element-plus['"];?/gi,
  )
  for (const m of importMatches) {
    for (const raw of m[1].split(',')) {
      const name = raw.trim().split(/\s+as\s+/i).pop()?.trim()
      if (name) {
        tags.add(name)
      }
    }
  }

  return [...tags]
}

/**
 * 按需加载 Element Plus 组件及其样式，返回一个可供 window.ElementPlus 使用的对象。
 *
 * 使用示例：
 *   window.ElementPlus = await loadElementPlus(resolveElementPlusTags(source))
 */
export async function loadElementPlus(
  refs: string[],
): Promise<Record<string, any>> {
  const paths = new Set<string>()
  for (const ref of refs) {
    const path = resolveComponentPath(ref)
    if (path) {
      paths.add(path)
    }
  }

  const componentModules = import.meta.glob(
    '/node_modules/element-plus/es/components/*/index.mjs',
  )
  const styleModules = import.meta.glob(
    '/node_modules/element-plus/es/components/*/style/css.mjs',
  )

  const result: Record<string, any> = {}

  for (const path of paths) {
    const componentLoader = componentModules[
      `/node_modules/element-plus/es/components/${path}/index.mjs`
    ]
    const styleLoader = styleModules[
      `/node_modules/element-plus/es/components/${path}/style/css.mjs`
    ]

    if (!componentLoader) {
      console.warn(`[vue3-transfer] Element Plus component not found: ${path}`)
      continue
    }

    const [componentMod] = await Promise.all([
      componentLoader() as Promise<Record<string, any>>,
      styleLoader?.().catch(() => {
        // 部分组件无独立样式入口，忽略
      }),
    ])

    for (const [key, value] of Object.entries(componentMod)) {
      if (key.startsWith('El')) {
        result[key] = value
      }
    }
  }

  return result
}
