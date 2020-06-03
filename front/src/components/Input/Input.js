import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  StyledContainer,
  StyledContent,
  StyledSpinner,
  StyledIcon,
  StyledInput,
  StyledPlaceholder,
  StyledLabel,
  StyledRadio,
  StyledRadioContainer,
  StyledRadioContent,
  StyledRadioCheckmark,
  StyledCheckboxContainer,
  StyledCheckboxContent,
  StyledCheckbox
} from './styled'
import * as icons from '../Icon'

import { sizes, attachs } from '../../styled/oneOf'

const Input = ({
  onChange,
  name,
  id,
  type,
  defaultValue,
  disabled,
  register,
  error,
  label,
  placeholder,
  icon,
  loading,
  size,
  basic,
  checkmark,
  attached,
  ...props
}) => {
  const containerRef = useRef()

  const Icon = icon ? icons[icon] : null
  const { Spinner, Check } = icons

  const [input, setInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = e => {
    setInput(e.target.value)
    onChange(e.target.value)
  }

  const handleFocusToggle = () => setIsFocused(!isFocused)

  if (type === 'radio') {
    return (
      <StyledRadioContainer size={size} ref={containerRef}>
        <StyledRadioContent className="content" error={error} checkmark={checkmark}>
          <StyledRadio
            ref={register}
            basic={basic}
            value={defaultValue || ''}
            id={name + defaultValue}
            name={name}
            onChange={handleChange}
            {...props}
          />
          <label htmlFor={name + defaultValue} style={{ justifyContent: checkmark ? 'flex-start' : 'center' }}>
            {checkmark && <StyledRadioCheckmark className="checkmark" />}
            <span style={{ margin: checkmark ? '0 12px 0 10px' : 0 }}>{label}</span>
          </label>
        </StyledRadioContent>
      </StyledRadioContainer>
    )
  }

  if (type === 'checkbox') {
    return (
      <StyledCheckboxContainer>
        <StyledCheckboxContent error={error}>
          <StyledCheckbox
            ref={register}
            value={defaultValue || ''}
            id={name + defaultValue}
            name={name}
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />
          <label htmlFor={name + defaultValue}>
            <Check />
          </label>
        </StyledCheckboxContent>
      </StyledCheckboxContainer>
    )
  }

  return (
    <StyledContainer size={size} label={label} ref={containerRef}>
      <StyledContent
        className="content"
        basic={basic}
        isFocused={isFocused}
        size={size}
        error={error}
        attached={attached}
      >
        {loading && (
          <StyledSpinner>
            <Spinner />
          </StyledSpinner>
        )}
        {placeholder
          && !input
          && !isFocused && (
          <StyledPlaceholder hasIcon={icon} attached={attached}>
            {placeholder}
          </StyledPlaceholder>
        )}
        {icon && (
          <StyledIcon className="icon">
            <Icon color={isFocused || input.length > 0 ? 'rgba(0, 0, 0, 0.54)' : '#d9d9d9'} />
          </StyledIcon>
        )}
        {label && (
          <StyledLabel
            className="label"
            size={size}
            active={isFocused || input.length > 0 || defaultValue.length > 0}
            htmlFor={id || name}
            input-type={type}
          >
            {label}
          </StyledLabel>
        )}
        <StyledInput
          ref={register}
          disabled={disabled}
          type={type}
          name={name}
          size={size}
          tabIndex="0"
          onChange={handleChange}
          onFocus={handleFocusToggle}
          onBlur={handleFocusToggle}
          hasIcon={icon}
          {...props}
        />
      </StyledContent>
    </StyledContainer>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  basic: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  checkmark: PropTypes.bool,
  attached: PropTypes.oneOf(attachs)
}

Input.defaultProps = {
  onChange: () => {},
  placeholder: '',
  defaultValue: '',
  icon: null,
  loading: false,
  type: 'text',
  label: null,
  size: 'default',
  basic: false,
  error: false,
  disabled: false,
  checkmark: false,
  attached: 'default'
}

export default Input
