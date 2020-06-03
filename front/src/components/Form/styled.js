import styled from 'styled-components'

const StyledInputWrapper = styled.div`
  position: relative;
  margin: 0;
`

const StyledField = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 6px 0;
`

const StyledRequired = styled.div`
  color: #ea3d53;
  margin: 0 4px;
`

const StyledLabel = styled.div`
  padding: ${props => (props.padded ? '12px 6px' : '4px 6px')};
  font-size: 12px;
  line-height: 1;
  color: ${props => (props.error ? '#ea3d53' : 'rgba(0, 0, 0, 0.3)')};
  display: flex;
`

const StyledTextAreaWrapper = styled.div`
  border-radius: 8px;
  background-color: #f1f3f4;
  width: 100%;
`

const StyledTextArea = styled.textarea`
  background: none;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 12px 14px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);

  &:focus {
    outline: 0;
  }

  &::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.3);
  }
`

const StyledSelectWrapper = styled.div``

const StyledInputAbsoluteRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`

export {
  StyledInputWrapper, StyledField, StyledLabel, StyledTextAreaWrapper, StyledTextArea, StyledSelectWrapper, StyledInputAbsoluteRight, StyledRequired
}
