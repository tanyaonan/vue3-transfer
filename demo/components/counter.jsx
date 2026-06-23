import { useState } from 'react'
import { Tag, message } from 'antd'
import styled from 'styled-components'
import MyButton from './button.jsx'

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
        <MyButton type="primary" onClick={() => setCount(c => c + 1)}>+1</MyButton>
        <MyButton onClick={() => setCount(c => c - 1)}>-1</MyButton>
        <MyButton onClick={() => { setCount(0); message.info('Count 已重置') }}>Reset</MyButton>
      </Actions>
    </Wrapper>
  )
}
