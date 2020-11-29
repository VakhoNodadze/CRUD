import React from 'react'

export const Location = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14.667" viewBox="0 0 12 14.667">
    <g id="prefix__map-pin_1_" data-name="map-pin (1)" transform="translate(-3 -1)">
      <path id="prefix__Path_4796" d="M15 7c0 4.667-6 8.667-6 8.667s-6-4-6-8.667a6 6 0 1 1 12 0z" data-name="Path 4796" fill={color || '#d9d9d9'} />
      <circle id="prefix__Ellipse_841" cx="2" cy="2" r="2" data-name="Ellipse 841" transform="translate(7 5)" style={{ fill: '#fff' }} />
    </g>
  </svg>
)

export default Location
