import React from 'react'

export const Check = ({ color, size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 8} height={size || 7} margin-bottom="10px" viewBox="0 0 8.96 6.395">
    <path
      id="prefix__check_3_"
      d="M11.546 6l-5.188 5.188L4 8.83"
      data-name="check (3)"
      transform="translate(-3.293 -5.293)"
      style={{
        fill: 'none', stroke: color || '#fff', strokeLinecap: 'round', strokeLinejoin: 'round',
      }}
    />
  </svg>
)

export default Check
