import React from 'react'

export const DownUpArrow = ({ rotate }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10.828" height="15.414" viewBox="0 0 10.828 6.414">
    <path
      id="chevron-down"
      d="M0,0,4,4,8,0"
      transform={rotate ? 'translate(9.14 5.414) rotate(180)' : 'translate(1.14 1.414) rotate(0)'}
      fill="none"
      stroke="#2675fe"
      style={{
        fill: 'none', stroke: '#2675fe', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px', transition: '0.8s'
      }}
    />
  </svg>

)

export default DownUpArrow
