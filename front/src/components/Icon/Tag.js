import React from 'react'

export const Tag = ({ margin, color, size }) => {
  const style = {
    fill: 'none',
    stroke: color || '#fff',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    margin: margin || 0
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 17.129}
      height={size || 16.996}
      viewBox="0 0 17.129 16.996"
      style={style}
    >
      <g id="prefix__tag" transform="translate(-1.5 -1.5)">
        <path
          id="prefix__Path_5059"
          d="M17.515 11.522l-5.984 5.984a1.669 1.669 0 0 1-2.362 0L2 10.346V2h8.346l7.169 7.169a1.669 1.669 0 0 1 0 2.353z"
          data-name="Path 5059"
          style={style}
        />
        <path
          id="prefix__Line_688"
          d="M0 0L0 0"
          style={style}
          data-name="Line 688"
          transform="translate(6.017 5.938)"
        />
      </g>
    </svg>
  )
}

export default Tag
