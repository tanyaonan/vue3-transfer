import React from 'react'

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

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 16px',
    border: '1px solid transparent',
    borderRadius: '6px',
    fontSize: '14px',
    lineHeight: 1.5,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s',
    outline: 'none',
  }

  return (
    <button
      style={{ ...baseStyle, ...typeStyles[type] }}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
