import React from 'react'
import PropTypes from 'prop-types'
import { StyledLabel, StyledRemove } from './styled'

import Tooltip from '../Tooltip'
import Remove from '../Icon/Remove'

import { variants, colors } from '../../../styled/oneOf'

const Label = ({
  children, color, variant, numOfLines, onClick, onRemove, ...rest
}) => {
  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <StyledLabel
      variant={variant}
      numOfLines={numOfLines}
      onClick={handleClick}
      clickable={typeof onClick === 'function'}
      color={color}
      {...rest}
    >
      {numOfLines ? <Tooltip content={children}>{children}</Tooltip> : children}
      {onRemove && (
        <StyledRemove className="remove" onClick={onRemove}>
          <Remove />
        </StyledRemove>
      )}
    </StyledLabel>
  )
}

Label.propTypes = {
  variant: PropTypes.oneOf(variants),
  numOfLines: PropTypes.number,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  color: PropTypes.oneOf(colors)
}

Label.defaultProps = {
  variant: 'default',
  numOfLines: null,
  onClick: null,
  onRemove: null,
  color: 'elementBgSecondary'
}

export default Label
