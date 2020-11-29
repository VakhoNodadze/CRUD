import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledSubheader } from './styled'

import Tooltip from '../Tooltip'

const ItemSubheader = ({ children, numOfLines }) => {
  const ref = useRef()
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    if (ref.current && ref.current.offsetWidth < ref.current.scrollWidth) setShowTip(true)
  }, [])

  return (
    <StyledSubheader ref={ref} className="subheader" numOfLines={numOfLines}>
      {showTip ? <Tooltip content={children}>{children}</Tooltip> : children}
    </StyledSubheader>
  )
}

ItemSubheader.propTypes = {
  numOfLines: PropTypes.number
}

ItemSubheader.defaultProps = {
  numOfLines: null
}

export default ItemSubheader
