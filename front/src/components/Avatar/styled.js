import styled, { css } from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: ${props => (props.rounded ? props.theme.borderRadius.default : props.theme.borderRadius.circular)};
  background-color: ${props => (props.color ? props.color : props.theme.color.disabled)};
  width: ${props => props.theme.avatarSize[props.size]};
  height: ${props => props.theme.avatarSize[props.size]};
  font-size: ${props => props.theme.fontSize[props.size]};

  ${props => props.borderColor
    && css`
      border: 2px solid ${props.borderColor};
    `};

  ${props => props.clickable
    && css`
      cursor: pointer;
    `};
`

const StyledContent = styled.div``

export { StyledContainer, StyledContent }
