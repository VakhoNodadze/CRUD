import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './styled'

import ItemContent from './ItemContent'
import ItemHeader from './ItemHeader'
import ItemSubheader from './ItemSubheader'
import ItemExtra from './ItemExtra'

import { sizes } from '../../../styled/oneOf'

const Item = ({
  children, size, padded, ...rest
}) => (
  <StyledContainer size={size} padded={padded} {...rest}>
    {children}
  </StyledContainer>
)

Item.propTypes = {
  size: PropTypes.oneOf(sizes),
  padded: PropTypes.bool
}

Item.defaultProps = {
  size: 'default',
  padded: false
}

Item.Content = ItemContent
Item.Header = ItemHeader
Item.Subheader = ItemSubheader
Item.Extra = ItemExtra

export default Item
