import React from 'react'

export const AlertCircle = ({ color }) => {
  const style = {
    fill: 'none',
    stroke: color || '#ea3d53',
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
      <g
        id="prefix__alert-circle_1_"
        data-name="alert-circle (1)"
        transform="translate(-1.5 -1.962)"
      >
        <circle
          id="prefix__Ellipse_879"
          cx="8"
          cy="8"
          r="8"
          className="prefix__cls-1"
          data-name="Ellipse 879"
          transform="translate(2 2.462)"
          style={style}
        />
        <path
          id="prefix__Line_657"
          d="M0 0L0 4"
          className="prefix__cls-1"
          data-name="Line 657"
          transform="translate(10 6.462)"
          style={style}
        />
        <path
          id="prefix__Line_658"
          d="M0 0L0 0"
          className="prefix__cls-1"
          data-name="Line 658"
          transform="translate(10 13.462)"
          style={style}
        />
      </g>
    </svg>

  )
}

export default AlertCircle
