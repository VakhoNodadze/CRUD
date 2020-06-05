import styled from 'styled-components'

const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease-in;
  overflow: overlay;
  opacity: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return '1'
    default:
      return '0'
    }
  }};
  transition: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'opacity 0.1s ease-in-out'
    case 'out':
      return 'opacity 0.1s ease-in-out'
    default:
      return ''
    }
  }};
`
const StyledContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.scrolling ? '8%' : 'unset')};
  margin-bottom: ${(props) => (props.scrolling ? '8%' : 'unset')};
  min-height: 200px;
  min-width: 240px;
  max-height: ${(props) => (props.scrolling ? 'unset' : '90vh')};
  max-width: 96%;
  width: ${(props) => {
    switch (props.size) {
    case 'medium':
      return '800px'
    case 'small':
      return '450px'
    default:
      return '600px'
    }
  }};
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.big};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  transform: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'scale(1)'
    default:
      return 'scale(0.82)'
    }
  }};
  transition: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'transform 0.1s'
    case 'out':
      return 'transform 0.1s'
    default:
      return ''
    }
  }};

  .content {
    max-height: ${(props) => (props.scrolling ? 'unset' : '80vh')};
  }
`

const StyledContent = styled.div`
  padding: ${(props) => props.theme.paddingVertical.huge} ${(props) => props.theme.paddingHorizontal.huge};
  /* max-height: 80vh; */
`

const StyledHeader = styled.div`
  width: '100%';
  color: #fff;
  padding: ${(props) => props.theme.paddingVertical.huge} ${(props) => props.theme.paddingHorizontal.huge};
  border-radius: ${({ theme }) => theme.borderRadius.big};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${(props) => props.theme.color.primary};
`

const StyledClose = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: solid 1px #f1f3f4;
  border-radius: 10rem;
  cursor: pointer;
  display: flex;
  height: 34px;
  width: 34px;
  justify-content: center;
  align-items: center;
`

export {
  StyledOverlay, StyledContainer, StyledContent, StyledHeader, StyledClose
}
