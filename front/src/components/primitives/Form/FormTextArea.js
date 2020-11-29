import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { StyledTextAreaWrapper, StyledTextArea } from './styled'

export const FormTextArea = ({ name, validate, ...props }) => {
  const { register, errors } = useFormContext()
  const error = errors[name]

  return (
    <StyledTextAreaWrapper>
      <StyledTextArea name={name} ref={register({ validate })} {...props} />
    </StyledTextAreaWrapper>
  )
}

FormTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func
}

FormTextArea.defaultProps = {
  validate: () => {}
}

export default memo(FormTextArea)
