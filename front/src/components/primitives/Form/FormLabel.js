import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { StyledLabel, StyledRequired } from './styled'

export const FormField = ({
  name, padded, required, error, children, ...rest
}) => (
  <StyledLabel padded={padded} error={error} {...rest}>
    {name}
    {children}
    {required && <StyledRequired>*</StyledRequired>}
  </StyledLabel>
)

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  padded: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool
}

FormField.defaultProps = {
  padded: false,
  required: false,
  error: false
}

export default memo(FormField)
