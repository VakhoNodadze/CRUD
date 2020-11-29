import React from 'react'

export const Person = ({ color }) => {
  const style = {
    fill: color || '#d9d9d9'
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16.062">
      <g id="noun_person_2676598" transform="translate(-58.308 -11.226)">
        <g id="Group_5398" data-name="Group 5398" transform="translate(58.308 11.226)">
          <circle
            id="Ellipse_834"
            data-name="Ellipse 834"
            cx="5.009"
            cy="5.009"
            r="5.009"
            transform="translate(2.491)"
            style={style}
          />
          <path
            id="Path_4808"
            data-name="Path 4808"
            d="M25.26,55.514a6.319,6.319,0,0,1-8.269,0,7.492,7.492,0,0,0-3.365,6.257h15A7.492,7.492,0,0,0,25.26,55.514Z"
            transform="translate(-13.625 -45.709)"
            style={style}
          />
        </g>
      </g>
    </svg>
  )
}

export default Person
