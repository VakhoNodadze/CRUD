import styled, { css } from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  /* min-width: ${props => {
    switch (props.size) {
    case 'tiny':
      return '80px'
    case 'mini':
      return '250px'
    default:
      return '300px'
    }
  }}; */
  height: ${props => {
    switch (props.size) {
    case 'mini':
      return '28px'
    case 'small':
      return '31px'
    default:
      return '50px'
    }
  }};
  margin-top: ${props => (props.label ? '20px' : 0)};
`

const StyledContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  border: ${props => (props.basic ? '0' : `1px solid ${props.theme.color.border}`)};
  border-bottom: 1px solid ${props => props.theme.color.border};
  border-radius: ${props => (props.basic ? '0' : props.theme.borderRadius.default)};
  background-color: ${props => props.theme.color.elementBg};
  border-color: ${props => (props.error ? 'red' : props.theme.color.border)};
  z-index: ${props => (props.isOpen ? '100' : '0')};
  cursor: ${props => (props.search ? 'inherit' : 'pointer')};
  transition: all ${props => props.theme.duration.default}ms ${props => props.theme.animation.easeInOut};

  &:hover {
    border-color: ${props => props.theme.color.borderHover};
  }

  ${props => {
    switch (props.attached) {
    case 'left':
      return css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left-color: transparent;
        `
    default:
      return null
    }
  }};

  ${props => props.isFocused
    && css`
      border-color: ${props.theme.color.primary} !important;
    `};

  & > .icon {
    padding: 0 ${props => props.theme.paddingHorizontal.tiny};
  }
`

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: ${props => {
    switch (props.size) {
    case 'mini':
      return '28px'
    case 'small':
      return '30px'
    default:
      return '48px'
    }
  }};
  padding: ${props => {
    switch (props.size) {
    case 'small':
      return '0 6px'
    default:
      return '0 20px'
    }
  }};
  ${props => props.hasIcon
    && css`
      padding-left: 47px;
    `};
  ${props => props.paddingLeft > 0
    && css`
      padding-left: ${props.paddingLeft}px;
    `};
  border: none;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.54);

  &:focus {
    outline: 0;
  }
  &:disabled {
    /* background-color: rgba(0, 0, 0, 0.008); */
    color: rgba(0, 0, 0, 0.34);
  }
`

const StyledPlaceholder = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: 0;
  height: 50px;
  padding: 0 20px;
  padding-left: ${props => (props.hasIcon ? '47px' : '20px')};
  line-height: 48px;
  border-radius: 6px;
  font-size: 14px;
  color: ${props => (props.color ? props.color : 'rgba(0, 0, 0, 0.3)')};
`

const StyledIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0;
  display: flex;
  align-items: center;
`

const StyledSpinner = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0;
  padding: 0 20px;
  line-height: 48px;
  z-index: 100;
`

const StyledLabel = styled.label`
  position: absolute;
  top: 0px;
  left: 0;
  z-index: ${props => (props.active ? 1 : 0)};
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  transition: transform 150ms ease-out, font-size 100ms ease-out, background-color 100ms ease-out;
  display: flex;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius.default};
  background-color: ${props => (props.active ? '#fff' : 'none')};

  height: ${props => {
    switch (props.size) {
    case 'mini':
      return '28px'
    case 'small':
      return '30px'
    default:
      return '48px'
    }
  }};
  padding: ${props => {
    switch (props.size) {
    case 'small':
      return '0 3px'
    default:
      return '0 10px'
    }
  }};
  margin: ${props => {
    switch (props.size) {
    case 'small':
      return '0 3px'
    default:
      return '0 10px'
    }
  }};
  ${props => props.active
    && css`
      transform: translateY(-8px);
      font-size: 0.85em;
      height: auto;
    `};
`

// radio
const StyledRadioContainer = styled.div`
  position: relative;
  min-width: 38px;
  height: ${props => props.theme.elementSize[props.size]};

  & > .content {
    & > label {
      border-radius: ${props => props.theme.borderRadius[props.size]};
    }
  }
`
const StyledRadioContent = styled.div`
  height: 100%;
`

const StyledRadio = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: fixed;
  width: 0;
  background: transparent;

  & ~ label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 12px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.54);
    border: ${props => (props.basic ? '0' : 'solid 1px rgba(0, 0, 0, 0.15)')};
    margin: 0;
    cursor: pointer;
  }

  &:checked ~ label,
  &:checked ~ label .checkmark {
    border-color: #2675fe;
    color: #2675fe;

    &:after {
      background-color: #2675fe;
    }
  }
`

const StyledRadioCheckmark = styled.div`
  position: relative;
  height: 18px;
  width: 18px;
  margin-left: 12px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.34);
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`

// checkbox
const StyledCheckboxContainer = styled.div``
const StyledCheckboxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > label {
    border-color: ${props => (props.error ? 'red' : props.theme.color.border)} !important;
  }
`

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: fixed;
  width: 0;
  background: transparent;

  & ~ label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.15);
    background-color: transparent;

    svg {
      display: none;
    }
  }

  &:checked ~ label {
    background-color: #2675fe;

    svg {
      display: block;
    }
  }
`

export {
  StyledContainer,
  StyledContent,
  StyledInput,
  StyledPlaceholder,
  StyledIcon,
  StyledSpinner,
  StyledLabel,
  StyledRadioContainer,
  StyledRadio,
  StyledRadioContent,
  StyledRadioCheckmark,
  StyledCheckboxContainer,
  StyledCheckboxContent,
  StyledCheckbox
}
