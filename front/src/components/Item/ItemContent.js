import React from 'react'
import { StyledContent } from './styled'

const ItemContent = ({ children, ...rest }) => (
  <StyledContent className="content" {...rest}>
    {children}
  </StyledContent>
)

export default ItemContent
