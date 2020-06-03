import React from 'react'
import { withTheme } from 'styled-components'

export const H = ({ theme, size }) => {
  const style = {
    fill: 'none',
    stroke: theme.color.text,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24">
      <g id="Artboard_1" data-name="Artboard – 1" clipPath="url(#clip-Artboard_1)">
        <g id="Group_5837" data-name="Group 5837" transform="translate(-0.5 0.029)">
          <line id="Line_695" data-name="Line 695" y2="16.029" transform="translate(6.5 3.971)" style={style} />
          <line id="Line_696" data-name="Line 696" y2="16.029" transform="translate(18.111 3.971)" style={style} />
          <line id="Line_697" data-name="Line 697" x2="11.611" transform="translate(6.5 11.985)" style={style} />
        </g>
      </g>
    </svg>
  )
}

export default withTheme(H)
