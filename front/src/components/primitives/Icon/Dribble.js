import React from 'react'

export const Dribble = ({ opacity }) => {
  const style = {
    opacity: opacity || '1'
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 35.804 35.803"
    >
      <g id="dribbble" transform="translate(0 -.002)" style={style}>
        <path
          fill="#ea4c89"
          id="Path_2244"
          d="M17.9 0a17.9 17.9 0 1 0 17.9 17.9A17.9 17.9 0 0 0 17.9 0zm11.749 8.665a14.882 14.882 0 0 1 3.2 8.818 31.762 31.762 0 0 0-10.474-.251Q21.8 15.927 21.2 14.7a21.6 21.6 0 0 0 8.449-6.035zm-2.06-2.139a18.9 18.9 0 0 1-7.748 5.518 76.679 76.679 0 0 0-5.463-8.671 14.894 14.894 0 0 1 13.211 3.153zM11.474 4.4A73.348 73.348 0 0 1 17 12.992 52.88 52.88 0 0 1 3.351 14.47 15.009 15.009 0 0 1 11.474 4.4zM2.949 17.9l.012-.483h.081A55.018 55.018 0 0 0 18.4 15.672q.53 1.079 1.042 2.218c-6.24 1.829-10.13 5.936-12.8 9.843A14.882 14.882 0 0 1 2.949 17.9zm5.879 11.875c2.524-3.8 6.042-7.564 11.766-9.143A51.082 51.082 0 0 1 23.6 31.724a14.9 14.9 0 0 1-14.772-1.949zm17.522.459a54.5 54.5 0 0 0-2.822-10.184 29.64 29.64 0 0 1 9.11.389 14.984 14.984 0 0 1-6.289 9.795z"
          className="cls-1"
          data-name="Path 2244"
        />
      </g>
    </svg>
  )
}

export default Dribble