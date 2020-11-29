import React from 'react'

export const InfoCircle = ({ color }) => {
  const style = {
    fill: 'none',
    stroke: color || 'rgba(0,0,0,.84)',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
    >
      <g id="prefix__info" transform="translate(-1.5 -1.5)">
        <circle
          id="prefix__Ellipse_875"
          cx="8"
          cy="8"
          r="8"
          style={style}
          data-name="Ellipse 875"
          transform="translate(2 2)"
        />
        <path
          id="prefix__Line_652"
          d="M0 4L0 0"
          style={style}
          data-name="Line 652"
          transform="translate(10 9.5)"
        />
        <path
          id="prefix__Line_653"
          d="M0 0L0.01 0"
          style={style}
          data-name="Line 653"
          transform="translate(9.999 6.8)"
        />
      </g>
    </svg>

  )
}

export default InfoCircle
