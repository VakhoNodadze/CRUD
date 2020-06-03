import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext, Controller } from 'react-hook-form'

import Select from '../Select'

import { StyledSelectWrapper } from './styled'

export const FormSelect = ({
  name, validate, ...props
}) => {
  const { errors, control } = useFormContext()
  const error = errors[name]

  return (
    <StyledSelectWrapper>
      <Controller as={<Select name={name} error={typeof error === 'object'} {...props} />} name={name} control={control} rules={{ validate }} mode="onChange" type="select" />
    </StyledSelectWrapper>
  )
}

FormSelect.propTypes = {
  name: PropTypes.string.isRequired
}

FormSelect.defaultProps = {}

export default FormSelect
