import React from 'react'
import { StyledContainer } from './styled'

const Divider = ({ isHidden, size, ...rest }) => <StyledContainer isHidden={isHidden} size={size} {...rest} />

export default Divider
