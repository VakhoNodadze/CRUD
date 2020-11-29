import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './styled'

import ListItem from './ListItem'

const List = ({
  children, horizontal, centered, padded, divided, ...rest
}) => (
  <StyledContainer horizontal={horizontal} centered={centered} padded={padded} divided={divided} {...rest}>
    {children}
  </StyledContainer>
)

List.propTypes = {
  horizontal: PropTypes.bool,
  centered: PropTypes.bool,
  padded: PropTypes.bool,
  divided: PropTypes.bool
}

List.defaultProps = {
  horizontal: false,
  centered: false,
  padded: false,
  divided: false
}

List.Item = ListItem

export default List
