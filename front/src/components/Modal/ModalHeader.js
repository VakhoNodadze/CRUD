import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader } from './styled'

const ModalHeader = ({ children, ...rest }) => (
  <StyledHeader className="header" {...rest}>
    {children}
  </StyledHeader>
)

export default ModalHeader
