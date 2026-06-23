import React from 'react'
import styled from 'styled-components'

const typeStyles = {
  default: {
    background: '#fff',
    borderColor: '#d9d9d9',
    color: '#595959',
  },
  primary: {
    background: '#1677ff',
    borderColor: '#1677ff',
    color: '#fff',
  },
  warning: {
    background: '#faad14',
    borderColor: '#faad14',
    color: '#fff',
  },
  info: {
    background: '#8c8c8c',
    borderColor: '#8c8c8c',
    color: '#fff',
  },
  danger: {
    background: '#ff4d4f',
    borderColor: '#ff4d4f',
    color: '#fff',
  },
}

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.5;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  transition: all 0.2s;
  outline: none;
  background: ${props => typeStyles[props.$type]?.background || typeStyles.default.background};
  border-color: ${props => typeStyles[props.$type]?.borderColor || typeStyles.default.borderColor};
  color: ${props => typeStyles[props.$type]?.color || typeStyles.default.color};
`

export default function MyButton({
  type = 'default',
  disabled = false,
  children,
  onClick,
}) {
  const handleClick = (e) => {
    if (disabled) return
    onClick?.(e)
  }

  return (
    <StyledButton
      $type={type}
      $disabled={disabled}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  )
}
