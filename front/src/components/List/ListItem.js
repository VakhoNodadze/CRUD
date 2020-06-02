import React from 'react'
import PropTypes from 'prop-types'
import { StyledItem } from './styled'

import Tooltip from '../Tooltip'

const ListItem = ({
  children, onClick, disabled, tooltip, active, ...rest
}) => {
  const handleClick = () => {
    if (onClick && !disabled) onClick()
  }

  return (
    <StyledItem
      className="item"
      disabled={disabled}
      active={active}
      onClick={handleClick}
      clickable={typeof onClick === 'function'}
      {...rest}
    >
      {tooltip ? (
        <div>
          <Tooltip content={tooltip}>{children}</Tooltip>
        </div>
      ) : (
        children
      )}
    </StyledItem>
  )
}

ListItem.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  tooltip: PropTypes.string
}

ListItem.defaultProps = {
  onClick: null,
  disabled: false,
  active: false,
  tooltip: null
}

export default ListItem
