import React from 'react'
import { StyledContainer } from './styled'

const Container = ({ children, ...rest }) => <StyledContainer {...rest}>{children}</StyledContainer>

Container.propTypes = {}

Container.defaultProps = {}

export default Container
