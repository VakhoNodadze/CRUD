import React from 'react'

export const Job = ({ color }) => {
  const style = {
    fill: color || '#d9d9d9'
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16.5">
      <g id="noun_job_2043816" transform="translate(-2.5 -8.7)">
        <g id="Group_5397" data-name="Group 5397" transform="translate(2.5 8.7)">
          <path
            id="Path_4806"
            data-name="Path 4806"
            d="M19.76,12.282H16.08V11.34A2.617,2.617,0,0,0,13.5,8.7h-3a2.617,2.617,0,0,0-2.58,2.64v.942H4.22a1.74,1.74,0,0,0-1.72,1.76V16.4a.544.544,0,0,0,.54.553H10.9v-.43a.363.363,0,0,1,.36-.368h1.48a.363.363,0,0,1,.36.368v.43h7.86a.544.544,0,0,0,.54-.553V14.063A1.762,1.762,0,0,0,19.76,12.282ZM9.84,11.34a.674.674,0,0,1,.66-.675h3a.674.674,0,0,1,.66.675v.942H9.84Z"
            transform="translate(-2.5 -8.7)"
            style={style}
          />
          <path
            id="Path_4807"
            data-name="Path 4807"
            d="M23.205,54H16.1a1.074,1.074,0,0,1-2.136,0H6.839a.544.544,0,0,0-.539.553v5.3a1.739,1.739,0,0,0,1.716,1.76H22.008a1.76,1.76,0,0,0,1.736-1.781V54.553A.544.544,0,0,0,23.205,54Z"
            transform="translate(-5.522 -45.114)"
            style={style}
          />
        </g>
      </g>
    </svg>
  )
}

export default Job
