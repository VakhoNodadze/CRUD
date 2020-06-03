import React from 'react'

const style = {
  fill: 'none',
  stroke: '#424242',
  strokeWidth: 1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export const MoreVertical = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" style={style}>
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
)

export default MoreVertical
