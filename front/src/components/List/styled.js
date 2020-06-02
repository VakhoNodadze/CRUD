import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  display: block;
  margin: 0 -4px;

  ${(props) => props.horizontal
    && css`
      display: flex;
      flex-wrap: wrap;
    `};

  ${(props) => props.centered
    && css`
      justify-content: center;
      align-items: center;
    `};

    ${(props) => props.padded
      && css`
        & > .item {
          padding: 12px ${props.horizontal ? '26px' : 0};
        }
      `};

    ${(props) => props.divided
      && css`
        & > .item:not(:last-child) {
          border-bottom: ${props.horizontal ? 0 : '1px solid rgba(0,0,0, 0.034)'};
        }
        & > .item:not(:last-child):after {
          content: '';
          position: absolute;
          right: -4px;
          height: 100%;
          width: 1px;
          border-right: ${props.horizontal ? '1px solid rgba(0,0,0, 0.34)' : 0};
        }
        ${props.horizontal
          && css`
            & > .item {
              padding: 0 6px;
            }
          `};
      `}
  }
`;

const StyledItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  color: ${(props) => (props.active ? props.theme.color.primary : props.theme.color.text)};
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};

  ${(props) => props.disabled
    && css`
      &.item {
        cursor: default;
        opacity: 0.4;
      }
    `};
`;

export { StyledContainer, StyledItem };
