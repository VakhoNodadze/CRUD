import React from 'react'

export const Info = ({ color }) => {
  const style = {
    fill: 'none',
    stroke: color || '#ccc',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '2px'
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2.01" height="10" viewBox="0 0 2.01 10">
      <g id="prefix__info" transform="translate(-11 -7)">
        <path id="prefix__Line_646" d="M0 4L0 0" style={style} data-name="Line 646" transform="translate(12 12)" />
        <path id="prefix__Line_647" d="M0 0L0.01 0" style={style} data-name="Line 647" transform="translate(12 8)" />
      </g>
    </svg>
  )
}

export default Info
