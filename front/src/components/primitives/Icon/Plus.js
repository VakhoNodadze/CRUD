import React from 'react'

const style = {
  fill: 'none',
  stroke: '#fff',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '2px'
}

export const Plus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
    <g id="plus-circle" transform="translate(-1 -1)">
      <circle
        id="Ellipse_313"
        cx="10"
        cy="10"
        r="10"
        style={style}
        className="cls-1"
        data-name="Ellipse 313"
        transform="translate(2 2)"
      />
      <path style={style} id="Line_473" d="M0 0v8" className="cls-1" data-name="Line 473" transform="translate(12 8)" />
      <path style={style} id="Line_474" d="M0 0h8" className="cls-1" data-name="Line 474" transform="translate(8 12)" />
    </g>
  </svg>
)

export default Plus
