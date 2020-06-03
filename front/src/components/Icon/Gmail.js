import React from 'react'

export const Gmail = ({ opacity, size }) => {
  const style = {
    opacity: opacity || '1'
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 21.571} height={size || 16.433} viewBox="0 0 21.571 16.433">
      <g id="prefix__gmail" transform="translate(0 -60.983)" style={style}>
        <g id="prefix__Group_5282" data-name="Group 5282" transform="translate(1.406 60.983)">
          <path
            id="prefix__Path_4956"
            d="M52.405 122.808l-1.377 13.828h-16.54l-1.109-13.56 9.379 5.251z"
            className="prefix__cls-2"
            data-name="Path 4956"
            fill="#f2f2f2"
            transform="translate(-33.379 -120.203)"
          />
          <path
            id="prefix__Path_4957"
            d="M56.474 60.983l-9.18 8.623-9.18-8.623h18.36z"
            className="prefix__cls-2"
            data-name="Path 4957"
            fill="#f2f2f2"
            transform="translate(-37.915 -60.983)"
          />
        </g>
        <path
          id="prefix__Path_4958"
          d="M2.516 113.8v12.451h-1.5A1.017 1.017 0 0 1 0 125.235v-13.268l1.643.045z"
          className="prefix__cls-3"
          data-name="Path 4958"
          fill="#f14336"
          transform="translate(0 -48.836)"
        />
        <path
          id="prefix__Path_4959"
          d="M454.8 109.094v13.268a1.017 1.017 0 0 1-1.018 1.017h-1.5v-12.451l.83-1.96z"
          className="prefix__cls-4"
          data-name="Path 4959"
          fill="#d32e2a"
          transform="translate(-433.233 -45.963)"
        />
        <path
          id="prefix__Path_4960"
          d="M21.571 62v1.131l-2.516 1.834-8.27 6.028-8.27-6.028L0 63.131V62a1.017 1.017 0 0 1 1.017-1.017h.589l9.18 6.691 9.18-6.691h.588A1.017 1.017 0 0 1 21.571 62z"
          className="prefix__cls-3"
          fill="#f14336"
          data-name="Path 4960"
        />
        <path
          id="prefix__Path_4961"
          d="M2.516 113.8L0 113.411v-1.444z"
          className="prefix__cls-4"
          data-name="Path 4961"
          fill="#d32e2a"
          transform="translate(0 -48.836)"
        />
      </g>
    </svg>
  )
}

export default Gmail
