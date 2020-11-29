import React from 'react'

import { StyledContent } from './styled'

const ModalContent = ({ children, ...rest }) => (
  <StyledContent className="content" {...rest}>
    {children}
  </StyledContent>
)

export default ModalContent
