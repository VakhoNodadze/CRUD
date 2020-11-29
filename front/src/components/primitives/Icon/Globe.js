import React from 'react'

export const Globe = ({ margin, color, size }) => {
  const style = {
    fill: 'none',
    stroke: color || '#fff',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1,
    margin: margin || 0
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 16} height={size || 16} viewBox="0 0 16 16" style={style}>
      <g id="globe" transform="translate(-1.5 -1.5)">
        <circle
          id="Ellipse_877"
          data-name="Ellipse 877"
          cx="7.5"
          cy="7.5"
          r="7.5"
          transform="translate(2 2)"
          style={style}
        />
        <line id="Line_625" data-name="Line 625" x2="15" transform="translate(2 9)" style={style} />
        <path
          id="Path_4975"
          data-name="Path 4975"
          d="M10.972,2a11.369,11.369,0,0,1,2.972,7.431,11.369,11.369,0,0,1-2.972,7.431A11.369,11.369,0,0,1,8,9.431,11.369,11.369,0,0,1,10.972,2Z"
          transform="translate(-1.541)"
          style={style}
        />
      </g>
    </svg>
  )
}

export default Globe
