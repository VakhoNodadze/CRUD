import styled, { css } from 'styled-components'

const StyledLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 22px;
  border-radius: 16px;
  /* border: 1px solid #ccc; */
  background-color: ${props => props.theme.color[props.color]};
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);

  .avatar {
    margin-right: 10px;
  }

  ${props => {
    switch (props.variant) {
    case 'compact':
      return css`
          padding: 4px;
        `
    case 'inverted':
      return css`
          color: ${props.theme.palette.inverted[1000]};
          border: 1px solid ${props.theme.palette.inverted[1000]};
          border-color: ${props.theme.palette.inverted[1000]};
        `
    default:
      return null
    }
  }};

  ${props => props.numOfLines
    && css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 174px;

      span,
      .tooltipTrigger {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 174px;
      }
    `};

  ${props => props.clickable
    && css`
      cursor: pointer;
    `};

  ${props => props.disabled
    && css`
      opacity: 0.64;
    `};

  &:hover {
    & > .remove {
      display: flex;
    }
  }
`

const StyledRemove = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: none;
  align-items: center;
  justify-content: center;
  width: 24px;
  cursor: pointer;
`

export { StyledLabel, StyledRemove }
