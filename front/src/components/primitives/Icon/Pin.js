import React from 'react'

export const Pin = ({ margin, color, size }) => {
  const style = {
    fill: 'none',
    stroke: color || '#9e9e9e',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    margin: margin || 0
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 9.21}
      height={size || 10.901}
      viewBox="0 0 9.21 10.901"
      style={style}
    >
      <g id="prefix__map-pin" transform="translate(.997 .5)">
        <path
          style={style}
          id="prefix__Path_3167"
          d="M11.21 5.05c0 3.15-4.105 5.85-4.105 5.85S3 8.2 3 5.05a4.105 4.105 0 0 1 8.21 0z"
          className="prefix__cls-1"
          data-name="Path 3167"
          transform="translate(-3.497 -1)"
        />
        <ellipse
          style={style}
          id="prefix__Ellipse_246"
          cx="1.117"
          cy="1.066"
          className="prefix__cls-1"
          data-name="Ellipse 246"
          rx="1.117"
          ry="1.066"
          transform="translate(2.366 2.726)"
        />
      </g>
    </svg>
  )
}

export default Pin
