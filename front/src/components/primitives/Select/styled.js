import styled, { css } from 'styled-components'

const StyledSelect = styled.div`
  position: relative;
  width: 100%;
  min-height: ${(props) => props.theme.elementSize[props.size]};

  & > .content {
    min-height: ${(props) => props.theme.elementSize[props.size]};

    ${(props) => props.disabled
      && css`
        background-color: ${props.theme.color.disabled};
        cursor: not-allowed;
      `};
    ${(props) => props.isOpen
      && css`
        border-color: #2675fe !important;
      `};
    ${(props) => {
    switch (props.attached) {
    case 'right':
      return css`
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          `
    default:
      return null
    }
  }};

    & > .placeholder {
      font-size: ${(props) => props.theme.fontSize[props.size]};
      padding: 0 ${(props) => props.theme.paddingHorizontal[props.size]};
      padding-left: ${(props) => (props.hasIcon ? props.theme.paddingHorizontal.large : props.theme.paddingHorizontal[props.size])};
    }

    & > .chevron {
      font-size: ${(props) => props.theme.fontSize[props.size]};
      padding: 0 ${(props) => props.theme.paddingHorizontal[props.size]};
    }
  }

  & > .options {
    top: calc(${(props) => props.theme.elementSize[props.size]} + 2px);
  }
`

const StyledSelectContent = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  border: solid 1px ${(props) => props.theme.color.border};
  border-color: ${(props) => (props.error ? props.theme.color.danger : props.theme.color.border)};
  border-radius: ${(props) => props.theme.borderRadius.default};
  cursor: ${(props) => (props.search ? 'inherit' : 'pointer')};
  background-color: ${(props) => props.theme.color.elementBg};
  transition: all ${(props) => props.theme.duration.default}ms ${(props) => props.theme.animation.easeInOut};

  &:hover {
    border-color: ${(props) => props.theme.color.borderHover};
  }
`

const StyledInput = styled.input`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%; */
  height: ${(props) => props.theme.elementSize[props.size]};
  padding: 0 ${(props) => props.theme.paddingHorizontal[props.size]};
  padding-left: ${(props) => (props.hasIcon ? props.theme.paddingHorizontal.large : props.theme.paddingHorizontal[props.size])};
  padding-right: ${(props) => (props.hasRightAbsolute ? props.theme.paddingHorizontal.large : props.theme.paddingHorizontal[props.size])};
  ${(props) => props.hasTags
    && css`
      padding-left: 12px;
    `};
  border: none;
  background: transparent;
  font-size: ${(props) => props.theme.fontSize.default};
  color: ${(props) => props.theme.color.secondary};

  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: ${(props) => props.theme.color.placeholder};
  }
`

const StyledOptions = styled.div`
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  position: absolute;
  left: 0;
  right: 0;
  border: solid 1px ${(props) => props.theme.color.border};
  box-shadow: ${(props) => props.theme.boxShadow.default};
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.color.elementBg};
  max-height: ${(props) => (props.isOpen ? '200px' : '0px')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  overflow: auto;
  padding: ${(props) => props.theme.paddingVertical.mini} 0;
  z-index: 11;
  transition: all ${(props) => props.theme.duration.shortest}ms ${(props) => props.theme.animation.easeInOut};
`

const StyledOptionItem = styled.div`
  padding: ${(props) => props.theme.paddingVertical.mini} ${(props) => props.theme.paddingHorizontal.mini};
  cursor: pointer;
  color: ${(props) => props.theme.color.secondary};
  font-size: 12px;
  background-color: ${(props) => (props.isSelected ? 'rgba(0,0,0, .02)' : '#fff')};
  transition: all ${(props) => props.theme.duration.shortest}ms ${(props) => props.theme.animation.easeInOut};

  ${(props) => props.disabled
    && css`
      opacity: 0.4;
    `} &:hover {
    background-color: ${(props) => props.theme.color.elementHover};
  }
`

const StyledPlaceholder = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${(props) => props.theme.elementSize[props.size]};
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.paddingHorizontal.default};
  padding-left: ${(props) => (props.hasIcon ? props.theme.paddingHorizontal.large : props.theme.paddingHorizontal.default)};
  font-size: ${(props) => props.theme.fontSize.default};
  color: ${(props) => (props.active ? props.theme.color.secondary : props.theme.color.placeholder)};
  margin-left: ${(props) => props.marginLeft}px;
`

const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0 ${(props) => props.theme.paddingHorizontal.tiny};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSpinner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${(props) => props.theme.paddingHorizontal.micro};
  z-index: 100;
`

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: ${(props) => props.theme.borderRadius.small};
  border: solid 1px ${(props) => props.theme.color.border};
  margin-right: 10px;
  background-color: ${(props) => (props.isChecked ? props.theme.color.primary : 'inherit')};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledChevronDown = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`

const StyledClear = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0;
  padding: 0 20px;
  line-height: 48px;
  z-index: 10;
  cursor: pointer;
`

const StyledTags = styled.div`
  /* position: absolute; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 0 0 8px;

  & > div:not(:last-child) {
    margin-right: 4px;
  }

  height: ${(props) => props.theme.elementSize[props.size]};
`

export {
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
  StyledClear,
  StyledTags
}
