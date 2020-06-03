import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { StyledField } from './styled'

export const FormField = ({ children, ...rest }) => <StyledField {...rest}>{children}</StyledField>

FormField.propTypes = {}

FormField.defaultProps = {}

export default memo(FormField)
