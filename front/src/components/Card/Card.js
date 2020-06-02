import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer, StyledContent } from './styled'

import Flex from '../Flex'

const Card = ({ children, ...rest }) => (
  <StyledContainer {...rest}>
    <Flex direction="column" height="100%" justify="space-between">
      {children}
    </Flex>
  </StyledContainer>
)

const CardContent = ({ children, extra, ...rest }) => <StyledContent extra={extra} className="content" {...rest}>{children}</StyledContent>

CardContent.propTypes = {
  extra: PropTypes.bool
}

CardContent.defaultProps = {
  extra: false
}

Card.Content = CardContent

export default Card
