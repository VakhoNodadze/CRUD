import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyledSelect,
  StyledSelectContent,
  StyledInput,
  StyledOptions,
  StyledOptionItem,
  StyledPlaceholder,
  StyledIcon,
  StyledSpinner,
  StyledCheckbox,
  StyledChevronDown,
  StyledClear
} from './styled'

import * as icons from '../Icon'
import Label from '../Label'

import { attachs, sizes } from '../../../styled/oneOf'

import { generateId } from '../../../utils/helpers'

const Select = ({
  size,
  onOpen,
  onChange,
  onBlur,
  onChangeInput,
  options,
  value,
  disabled,
  placeholder,
  icon,
  loading,
  startsWith,
  search,
  searchRemotely,
  openOnFocus,
  error,
  multiple,
  tags,
  checkbox,
  attached,
  ...rest
}) => {
  const containerRef = useRef()
  const inputRef = useRef()

  const Icon = icon ? icons[icon] : null
  const {
    Spinner, Check, ChevronDown, Remove
  } = icons

  const id = generateId()
  const [input, setInput] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleOpen = () => {
    if (disabled) return null
    onOpen()
    if (openOnFocus) setIsOpen(true)
    if (input.length > 0) setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChange = (e, val) => {
    e.preventDefault()
    e.stopPropagation()
    onChange(tags ? [...selectedOptions, val] : val)
    handleClose()
    // setInput(search && !multiple ? val : '')
    setInput('')
    // setSelectedOptions(prevSelectedOptions => [...prevSelectedOptions, val])
  }

  const handleOutsideClick = e => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      handleClose()
    }
  }

  const handleSearch = e => {
    setInput(e.target.value)
    onChangeInput(e.target.value)
    if (!isOpen && e.target.value.length > 0) {
      setTimeout(() => {
        setIsOpen(true)
      }, 100)
    }
    if (!openOnFocus && e.target.value.length === 0) {
      setIsOpen(false)
    }
    return true
  }

  const handleKeyPress = () => {}

  const handleFocusToggle = () => {
    if (isFocused) {
      onBlur(input)
    }
    setIsFocused(!isFocused)
  }

  const handleClear = e => {
    e.preventDefault()
    setInput('')
    // setSelectedOptions([])
    onChange('')
    onChangeInput('')
    inputRef.current.focus()
  }

  const handleRemoveOption = i => {
    const newValues = [...selectedOptions]
    newValues.splice(i, 1)
    onChange(newValues)
  }

  const handleInputKeyDown = e => {
    const val = e.target.value
    const { key } = e
    if (key === 'Enter') e.preventDefault()
    if (tags) {
      if (key === ',' && val) {
        onChange([...selectedOptions, val])
        setInput('')
      } else if (key === 'Backspace' && !val) {
        handleRemoveOption(selectedOptions.length - 1)
      }
    }
  }

  // effects
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  useEffect(
    () => {
      if (!Array.isArray(options)) return undefined
      if (searchRemotely) return undefined
      let filtered = []
      if (startsWith) {
        filtered = options.filter(o => {
          const label = String(o.label).toLowerCase()
          const searchInput = input.toLocaleLowerCase().trim()

          return label.startsWith(searchInput)
        })
      } else {
        filtered = options.filter(o => {
          const label = String(o.label).toLowerCase()
          const searchInput = input.toLocaleLowerCase().trim()

          return label.includes(searchInput)
        })
      }
      setFilteredOptions(filtered)
      if (tags && input === ',') setInput('')
    },
    [input]
  )

  useEffect(
    () => {
      if (Array.isArray(options)) setFilteredOptions(options)
    },
    [options]
  )

  useEffect(
    () => {
      if (value !== null) {
        if (Array.isArray(value)) {
          setSelectedOptions(value)
        } else {
          setSelectedOptions(tags ? [...selectedOptions, value] : [value])
        }
      } else {
        setSelectedOptions([])
      }
    },
    [value]
  )

  // renders
  const renderRightAbsolute = () => {
    if (loading) {
      return (
        <StyledSpinner>
          <Spinner />
        </StyledSpinner>
      )
    }
    if (!loading && !searchRemotely && !disabled) {
      return (
        <StyledChevronDown className="chevron">
          <ChevronDown />
        </StyledChevronDown>
      )
    }
    if (searchRemotely && !multiple && selectedOptions.length > 0) {
      return (
        <StyledClear onClick={e => handleClear(e)}>
          <Remove />
        </StyledClear>
      )
    }
    return null
  }

  const renderPlaceholderText = () => {
    if (tags && selectedOptions.length > 0) return null
    if (selectedOptions.length > 0 && multiple) return `${selectedOptions.length} option(s) selected`
    if (selectedOptions.length > 0 && !multiple) {
      const optionFound = options.find(o => o.value === selectedOptions[0])
      return optionFound ? optionFound.label : placeholder
    }
    if (placeholder) return placeholder
    return null
  }

  const renderPlaceholder = () => {
    if (!placeholder || isFocused || input.length > 0) return null

    return (
      <StyledPlaceholder
        className="placeholder"
        hasIcon={icon}
        active={selectedOptions.length > 0}
        size={size}
        htmlFor={id}
      >
        <span
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            marginRight: 10
          }}
        >
          {renderPlaceholderText()}
        </span>
      </StyledPlaceholder>
    )
  }

  const renderTags = () => {
    if (selectedOptions.length > 0) {
      return (
        <>
          {selectedOptions.map((item, index) => {
            const option = options.find(o => o.value === item)
            return (
              <Label onRemove={() => handleRemoveOption(index)} style={{ margin: '2px 0 0 6px' }}>
                {option ? option.label : item}
              </Label>
            )
          })}
        </>
      )
    }
    return null
  }

  const renderOptionItem = item => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {checkbox && (
        <StyledCheckbox isChecked={selectedOptions.includes(item.value)}>
          {selectedOptions.includes(item.value) && <Check />}
        </StyledCheckbox>
      )}
      <span style={{ maxWidth: '80%', opacity: item.disabled ? 0.4 : 1 }}>{item.label}</span>
      {item.labelRight && (
        <div
          style={{
            position: 'absolute',
            right: 10,
            zIndex: 10,
            color: '#2675fe'
          }}
        >
          {item.labelRight}
        </div>
      )}
    </div>
  )

  const renderOptions = () => {
    if (options && options.length > 0 && !loading) {
      return (
        <StyledOptions className="options" isOpen={isOpen}>
          {filteredOptions.map(item => (
            <StyledOptionItem
              key={item.value}
              isSelected={selectedOptions.includes(item.value)}
              onClick={e => (item.disabled ? null : handleChange(e, item.value))}
            >
              {renderOptionItem(item)}
            </StyledOptionItem>
          ))}
          {filteredOptions.length === 0 && (
            <div style={{ padding: '4px', textAlign: 'center' }}>
              <small style={{ fontSize: '12px', color: 'rgba(0,0,0, .34)' }}>Empty</small>
            </div>
          )}
        </StyledOptions>
      )
    }
    return null
  }

  return (
    <StyledSelect
      onClick={() => handleOpen()}
      onKeyDown={handleKeyPress}
      disabled={disabled}
      attached={attached}
      isOpen={isOpen}
      size={size}
      hasIcon={icon}
      ref={containerRef}
      {...rest}
    >
      <StyledSelectContent className="content" search={search} error={error}>
        {renderPlaceholder()}
        {icon && (
          <StyledIcon>
            <Icon color={isOpen || isFocused || selectedOptions.length > 0 ? 'rgba(0, 0, 0, 0.54)' : '#d9d9d9'} />
          </StyledIcon>
        )}
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          {tags && renderTags()}
          {search && (
            <StyledInput
              id={id}
              ref={inputRef}
              hasRightAbsolute={searchRemotely}
              onChange={handleSearch}
              onFocus={handleFocusToggle}
              onBlur={handleFocusToggle}
              onKeyDown={handleInputKeyDown}
              value={input}
              isOpen={isOpen}
              hasIcon={icon}
              size={size}
              disabled={disabled}
              hasTags={tags && selectedOptions.length > 0}
              placeholder={tags && selectedOptions.length > 0 ? placeholder : null}
            />
          )}
        </div>
        {renderRightAbsolute()}
      </StyledSelectContent>
      {renderOptions()}
    </StyledSelect>
  )
}

Select.propTypes = {
  onOpen: PropTypes.func,
  onChange: PropTypes.func,
  onChangeInput: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  startsWith: PropTypes.bool,
  search: PropTypes.bool,
  openOnFocus: PropTypes.bool,
  error: PropTypes.bool,
  multiple: PropTypes.bool,
  tags: PropTypes.bool,
  checkbox: PropTypes.bool,
  disabled: PropTypes.bool,
  searchRemotely: PropTypes.bool,
  attached: PropTypes.oneOf(attachs),
  size: PropTypes.oneOf(sizes)
}

Select.defaultProps = {
  onOpen: () => {},
  onChange: () => {},
  onChangeInput: () => {},
  onBlur: () => {},
  options: [],
  value: null,
  placeholder: '',
  icon: null,
  loading: false,
  startsWith: false,
  search: false,
  openOnFocus: true,
  error: false,
  multiple: false,
  tags: false,
  checkbox: false,
  disabled: false,
  searchRemotely: false,
  attached: 'default',
  size: 'default'
}

export default Select
