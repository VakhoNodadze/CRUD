import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './styled'

import { sizes } from '../../styled/oneOf'

const Image = ({ src, size, ...rest }) => (
  <StyledContainer size={size}>
    <img src={src} alt="" {...rest} />
  </StyledContainer>
)

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  size: PropTypes.oneOf(sizes)
}

Image.defaultProps = {
  size: 'default'
}

export default Image
