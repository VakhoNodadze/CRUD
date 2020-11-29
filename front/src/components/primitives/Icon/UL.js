import React from 'react'
import { withTheme } from 'styled-components'

export const List = ({ theme, size }) => {
  const style = {
    fill: 'none',
    stroke: theme.color.text,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" style={style}>
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  )
}

export default withTheme(List)
