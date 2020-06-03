import React from 'react'

const style = {
  fill: 'none',
  stroke: '#757575',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export const Calendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 16 17.667">
    <g id="prefix__calendar" transform="translate(.5 .5)">
      <rect
        id="prefix__Rectangle_1300"
        width="15"
        height="14.667"
        style={style}
        data-name="Rectangle 1300"
        rx="2"
        transform="translate(0 2)"
      />
      <path
        id="prefix__Line_663"
        d="M0 0L0 4"
        style={style}
        data-name="Line 663"
        transform="translate(10.833)"
      />
      <path
        id="prefix__Line_664"
        d="M0 0L0 4"
        style={style}
        data-name="Line 664"
        transform="translate(4.167)"
      />
      <path
        id="prefix__Line_665"
        d="M0 0L15 0"
        style={style}
        data-name="Line 665"
        transform="translate(0 6.667)"
      />
    </g>
  </svg>
)

export default Calendar
