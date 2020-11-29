import React from 'react'

export const ChevronRight = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="7.206" height="13.346" viewBox="0 0 7.206 13.346">
    <path
      id="prefix__chevron-down"
      d="M0 0l5.966 6 5.966-6"
      transform="rotate(-90 6.673 5.966)"
      style={{
        fill: 'none',
        stroke: color || '#757575',
        strokLinecap: 'round',
        strokeLinejoin: 'round'
      }}
    />
  </svg>
)

export default ChevronRight
