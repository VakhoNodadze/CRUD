import React from 'react'
import { withTheme } from 'styled-components'

export const Underline = ({ theme, size }) => {
  const style = {
    fill: 'none',
    stroke: theme.color.text,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" style={style}>
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
      <line x1="4" y1="21" x2="20" y2="21" />
    </svg>
  )
}

export default withTheme(Underline)
