import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  padding: ${(props) => (props.padded ? `${props.theme.paddingVertical.mini} 0` : 0)};

  & > .content > .header {
    font-size: ${(props) => props.theme.fontSize[props.size]};
    /* includes tooltip */
    .tooltipTrigger {
      font-size: ${(props) => props.theme.fontSize[props.size]};
    }
  }

  & > .avatar + .content {
    margin-left: ${(props) => props.theme.marginHorizontal.default};
  }

  svg {
    margin-right: ${(props) => props.theme.marginHorizontal.default};
  }
`;

const StyledContent = styled.div`
  overflow: auto;
  flex: 1;
`;

const StyledHeader = styled.div`
  font-family: ${(props) => props.theme.fontFamily.bold};
  color: ${(props) => props.theme.color.text};

  ${(props) => props.numOfLines
    && css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .tooltipTrigger {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `};
`;

const StyledSubheader = styled.div`
  font-family: ${(props) => props.theme.fontFamily.default};
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.secondary};

  ${(props) => props.numOfLines
    && css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .tooltipTrigger {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `};
`;

const StyledExtra = styled.div`
  font-family: ${(props) => props.theme.fontFamily.default};
  font-size: ${(props) => props.theme.fontSize.mini};
  color: ${(props) => props.theme.color.secondary};
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  svg {
    margin-right: ${(props) => props.theme.marginHorizontal.tiny};
  }

  ${(props) => props.numOfLines
    && css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .tooltipTrigger {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `};
`;

export {
  StyledContainer, StyledContent, StyledHeader, StyledSubheader, StyledExtra
};
