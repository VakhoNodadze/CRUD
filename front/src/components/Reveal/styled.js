import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
`

const StyledInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform: ${props => (props.isActive ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  transform-style: preserve-3d;
`

const StyledContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: ${props => (props.isHidden ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  z-index: ${props => (props.isHidden ? '1' : '2')};
`

export { StyledContainer, StyledInner, StyledContent }
