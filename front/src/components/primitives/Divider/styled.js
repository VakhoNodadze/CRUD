import styled from 'styled-components'

const StyledContainer = styled.div`
  height: ${(props) => props.isHidden ? 0 : '1px'};
  background-color: #f1f3f4;
  width: 100%;
  margin: ${props => props.size ? `${props.size}px 0` : '6px 0'};
`

const StyledContent = styled.div`

`

export { StyledContainer, StyledContent }
