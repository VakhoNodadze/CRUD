import styled, { css } from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  min-width: 300px;
  background-color: #fff;
  height: 358px;
  border-radius: 8px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);

  & > div > .remove {
    opacity: .9;
    transition: all 0.15s ease-in-out;
    filter: grayscale(100%);
  }

  &:hover {
    & > div > .remove {
      opacity: 1;
      filter: grayscale(0%);
    }
  }
`

const StyledContent = styled.div`
  padding: 20px;
  max-height: 100%;
  overflow: ${props => (props.overflow ? props.overflow : 'unset')};

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #2675FE;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #2C62EA;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0.1);
  }

  & + .content:not(:last-child) {
    padding-top: 0;
  }

  ${props => props.extra
    && css`
      padding: 0;

      .item {
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        text-align: center;
        border-top: 1px solid #f1f3f4;
        color: rgba(0, 0, 0, 0.52);
        height: 52px;

        & > div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 52px;
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.02);
        }
      }
    `};
`

export { StyledContainer, StyledContent }
