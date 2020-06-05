import styled from 'styled-components'

const StyledContainer = styled.div`
  width: ${props => props.theme.imageSize[props.size]};

  img {
    width: 100%;
  }
`

export { StyledContainer }
