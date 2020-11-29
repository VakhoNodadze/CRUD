import React from 'react'
import { withTheme } from 'styled-components'

export const OL = ({ theme, size }) => {
  const style = {
    fill: 'none',
    stroke: theme.color.text,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 20 16.721">
      <g id="Group_5834" data-name="Group 5834" transform="translate(-3580 14097.628)">
        <g id="Group_5833" data-name="Group 5833">
          <g id="Group_5832" data-name="Group 5832">
            <line id="Line_692" data-name="Line 692" x2="13" transform="translate(3586 -14095)" style={style} />
            <line id="Line_693" data-name="Line 693" x2="13" transform="translate(3586 -14089)" style={style} />
            <line id="Line_694" data-name="Line 694" x2="13" transform="translate(3586 -14083)" style={style} />
            <path
              id="Path_5062"
              data-name="Path 5062"
              d="M-.953-3.99v1.053h.688V.655H.986V-3.99Z"
              transform="translate(3581.953 -14093.638)"
              fill={style.stroke}
            />
            <path
              id="Path_5063"
              data-name="Path 5063"
              d="M.629-.43c.993-1.151,1.21-1.6,1.21-2.184A1.508,1.508,0,0,0,.174-4.092a1.488,1.488,0,0,0-1.632,1.56v.086H-.231v-.09a.407.407,0,0,1,.42-.455.392.392,0,0,1,.4.421c0,.4-.257.755-2.126,2.959V.671H1.921V-.43Z"
              transform="translate(3581.533 -14087.67)"
              fill={style.stroke}
            />
            <path
              id="Path_5064"
              data-name="Path 5064"
              d="M.873-2.284l.932-1.492V-3.99H-1.382v1.059H.177L-.579-1.688v.259H.165a.533.533,0,0,1,.592.55.532.532,0,0,1-.54.573A.517.517,0,0,1-.306-.851H-1.5A1.607,1.607,0,0,0,.214.762,1.629,1.629,0,0,0,1.965-.859,1.405,1.405,0,0,0,.873-2.284Z"
              transform="translate(3581.498 -14081.669)"
              fill={style.stroke}
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default withTheme(OL)
