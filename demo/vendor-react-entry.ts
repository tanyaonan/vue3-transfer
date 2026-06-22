/// <reference types="vite/client" />

export { default as React } from 'react'
export { default as ReactDOM } from 'react-dom/client'
export * as ReactJSXRuntime from 'react/jsx-runtime'

interface ComponentMeta {
  /** antd 组件目录名，例如 button、card */
  path: string
}

/**
 * 支持的 Ant Design 组件映射表。
 * key 为源码中使用的组件名（PascalCase）或命名导入名，
 * value 为组件在 antd/es 下的目录名。
 */
const componentRegistry: Record<string, ComponentMeta> = {
  // 通用
  Button: { path: 'button' },
  'Button.Group': { path: 'button' },
  Icon: { path: 'icon' },
  Typography: { path: 'typography' },

  // 布局
  Grid: { path: 'grid' },
  Row: { path: 'grid' },
  Col: { path: 'grid' },
  Layout: { path: 'layout' },
  Space: { path: 'space' },
  SpaceCompact: { path: 'space' },
  Flex: { path: 'flex' },

  // 导航
  Anchor: { path: 'anchor' },
  Breadcrumb: { path: 'breadcrumb' },
  Dropdown: { path: 'dropdown' },
  Menu: { path: 'menu' },
  Pagination: { path: 'pagination' },
  Steps: { path: 'steps' },
  Tabs: { path: 'tabs' },

  // 数据录入
  AutoComplete: { path: 'auto-complete' },
  Cascader: { path: 'cascader' },
  Checkbox: { path: 'checkbox' },
  ColorPicker: { path: 'color-picker' },
  DatePicker: { path: 'date-picker' },
  Form: { path: 'form' },
  Input: { path: 'input' },
  InputNumber: { path: 'input-number' },
  Mentions: { path: 'mentions' },
  Radio: { path: 'radio' },
  Rate: { path: 'rate' },
  Select: { path: 'select' },
  Slider: { path: 'slider' },
  Switch: { path: 'switch' },
  TimePicker: { path: 'time-picker' },
  Transfer: { path: 'transfer' },
  TreeSelect: { path: 'tree-select' },
  Upload: { path: 'upload' },

  // 数据展示
  Avatar: { path: 'avatar' },
  Badge: { path: 'badge' },
  Calendar: { path: 'calendar' },
  Card: { path: 'card' },
  CardGrid: { path: 'card' },
  CardMeta: { path: 'card' },
  Carousel: { path: 'carousel' },
  Collapse: { path: 'collapse' },
  Descriptions: { path: 'descriptions' },
  Empty: { path: 'empty' },
  Image: { path: 'image' },
  List: { path: 'list' },
  Popover: { path: 'popover' },
  QRCode: { path: 'qrcode' },
  Segmented: { path: 'segmented' },
  Statistic: { path: 'statistic' },
  Table: { path: 'table' },
  Tag: { path: 'tag' },
  Timeline: { path: 'timeline' },
  Tooltip: { path: 'tooltip' },
  Tour: { path: 'tour' },
  Tree: { path: 'tree' },

  // 反馈
  Alert: { path: 'alert' },
  Drawer: { path: 'drawer' },
  Modal: { path: 'modal' },
  Notification: { path: 'notification' },
  Popconfirm: { path: 'popconfirm' },
  Progress: { path: 'progress' },
  Result: { path: 'result' },
  Skeleton: { path: 'skeleton' },
  Spin: { path: 'spin' },

  // 其他
  App: { path: 'app' },
  ConfigProvider: { path: 'config-provider' },
  FloatButton: { path: 'float-button' },
  Watermark: { path: 'watermark' },
  Affix: { path: 'affix' },
  BackTop: { path: 'back-top' },

  // 静态方法
  message: { path: 'message' },
  notification: { path: 'notification' },
}

/**
 * 从 React JSX 源码中提取需要按需加载的 Ant Design 组件引用。
 *
 * 识别规则：
 * 1. `import { Button, message } from 'antd'` 中的命名导入
 * 2. JSX 中以大写字母开头的标签，如 `<Button>`、`<Card>`
 */
export function resolveAntdTags(source: string): string[] {
  const tags = new Set<string>()

  // import { Button, Card, message } from 'antd'
  const importMatches = source.matchAll(
    /import\s+\{([^}]+)\}\s+from\s+['"]antd['"];?/gi,
  )
  for (const m of importMatches) {
    for (const raw of m[1].split(',')) {
      const name = raw.trim().split(/\s+as\s+/i).pop()?.trim()
      if (name) {
        tags.add(name)
      }
    }
  }

  // <Button />、<Card>、<Tag color="success">
  const tagMatches = source.matchAll(/<\s*([A-Z][A-Za-z0-9]*)/g)
  for (const m of tagMatches) {
    if (componentRegistry[m[1]]) {
      tags.add(m[1])
    }
  }

  return [...tags]
}

/**
 * 按需加载 Ant Design 组件，返回一个可供 window.antd 使用的对象。
 *
 * 使用示例：
 *   window.antd = await loadAntd(resolveAntdTags(source))
 */
export async function loadAntd(
  refs: string[],
): Promise<Record<string, any>> {
  const paths = new Set<string>()
  for (const ref of refs) {
    const meta = componentRegistry[ref]
    if (meta) {
      paths.add(meta.path)
    }
  }

  const componentModules = import.meta.glob(
    '../node_modules/antd/es/*/index.js',
  )

  const result: Record<string, any> = {}

  for (const path of paths) {
    const loader = componentModules[
      `../node_modules/antd/es/${path}/index.js`
    ]

    if (!loader) {
      console.warn(`[vue3-transfer] Ant Design component not found: ${path}`)
      continue
    }

    const mod = (await loader()) as Record<string, any>

    // 为每个请求的 ref 匹配对应导出：优先 default，其次同名命名导出
    for (const ref of refs) {
      const meta = componentRegistry[ref]
      if (meta?.path !== path) continue

      if (mod.default) {
        result[ref] = mod.default
      } else if (mod[ref]) {
        result[ref] = mod[ref]
      }
    }
  }

  return result
}
