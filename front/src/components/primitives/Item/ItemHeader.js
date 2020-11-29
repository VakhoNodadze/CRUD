import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledHeader } from './styled'

import Tooltip from '../Tooltip'

const ItemHeader = ({ children, numOfLines, ...rest }) => {
  const ref = useRef()
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    if (ref.current && ref.current.offsetWidth < ref.current.scrollWidth) setShowTip(true)
  }, [])

  return (
    <StyledHeader ref={ref} className="header" numOfLines={numOfLines} {...rest}>
      {showTip ? <Tooltip content={children}>{children}</Tooltip> : children}
    </StyledHeader>
  )
}

ItemHeader.propTypes = {
  numOfLines: PropTypes.number
}

ItemHeader.defaultProps = {
  numOfLines: null
}

export default ItemHeader
