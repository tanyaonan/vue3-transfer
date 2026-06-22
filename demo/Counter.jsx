import { useState } from 'react'
import { Button, Card, Space, Tag, message } from 'antd'

export default function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((c) => c + 1)
  }

  function decrement() {
    setCount((c) => c - 1)
  }

  function reset() {
    setCount(0)
    message.info('Count 已重置')
  }

  return (
    <Card
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Ant Design Counter</span>
          <Tag color="success">React Transfer Demo</Tag>
        </div>
      }
      style={{ maxWidth: 420, margin: '40px auto' }}
    >
      <div style={{ textAlign: 'center', fontSize: 28, fontWeight: 600, margin: '24px 0' }}>
        Count: {count}
      </div>

      <Space style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button type="primary" onClick={increment}>+1</Button>
        <Button onClick={decrement}>-1</Button>
        <Button onClick={reset}>Reset</Button>
      </Space>
    </Card>
  )
}
