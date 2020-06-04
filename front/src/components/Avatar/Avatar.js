import React from 'react'
import PropTypes from 'prop-types'

import { StyledContainer } from './styled'

import Image from '../Image'

import { sizes } from '../../styled/oneOf'

const Avatar = ({
  children, size, avatar, color, borderColor, rounded, firstName, lastName, onClick, LabelIcon
}) => {
  const handleClick = () => {
    if (onClick) onClick()
  }

  if (avatar && avatar.url) {
    return (
      <StyledContainer
        className="avatar"
        size={size}
        color={color}
        borderColor={borderColor}
        rounded={rounded}
        clickable={typeof onClick === 'function'}
        onClick={handleClick}
      >
        {LabelIcon && (
          <div
            style={{
              position: 'absolute',
              right: '-5px',
              top: '-5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '16px',
              height: '16px',
              border: 'solid 1px #ffffff',
              backgroundColor: '#f1f3f4',
              borderRadius: '50%'
            }}
          >
            {LabelIcon}
          </div>
        )}
        <Image rounded={rounded} src={avatar.url} />
      </StyledContainer>
    )
  }

  return (
    <StyledContainer
      className="avatar"
      size={size}
      color={color}
      borderColor={borderColor}
      rounded={rounded}
      clickable={typeof onClick === 'function'}
      onClick={handleClick}
    >
      {LabelIcon && (
        <div
          style={{
            position: 'absolute',
            right: '-5px',
            top: '-5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '16px',
            height: '16px',
            border: 'solid 1px #ffffff',
            backgroundColor: '#f1f3f4',
            borderRadius: '50%'
          }}
        >
          {LabelIcon}
        </div>
      )}
      {firstName.slice(0, 1).toUpperCase()}
      {lastName.slice(0, 1).toUpperCase()}
      {children}
    </StyledContainer>
  )
}

Avatar.propTypes = {
  size: PropTypes.oneOf(sizes),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
  LabelIcon: PropTypes.node
}

Avatar.defaultProps = {
  size: 'default',
  firstName: '',
  lastName: '',
  color: null,
  borderColor: null,
  rounded: false,
  onClick: null,
  LabelIcon: null
}

export default React.memo(Avatar)
