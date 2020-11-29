import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

export const FormHidden = ({ name, defaultValue }) => {
  const { register } = useFormContext()

  return <input name={name} defaultValue={defaultValue} ref={register} style={{ display: 'none' }} />
}

FormHidden.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default memo(FormHidden)
