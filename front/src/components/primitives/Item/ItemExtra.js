import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledExtra } from './styled'

import Tooltip from '../Tooltip'

const ItemExtra = ({ children, numOfLines, ...rest }) => {
  const ref = useRef()
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    if (ref.current && ref.current.offsetWidth < ref.current.scrollWidth) setShowTip(true)
  }, [])

  return (
    <StyledExtra ref={ref} numOfLines={numOfLines} {...rest}>
      {showTip ? <Tooltip content={children}>{children}</Tooltip> : children}
    </StyledExtra>
  )
}

ItemExtra.propTypes = {
  numOfLines: PropTypes.number
}

ItemExtra.defaultProps = {
  numOfLines: null
}

export default ItemExtra
