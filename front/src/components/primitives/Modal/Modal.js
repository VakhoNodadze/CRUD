import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'

import { StyledOverlay, StyledContainer, StyledClose } from './styled'
import Remove from '../Icon/Remove'

const Modal = ({
  isOpen,
  onClose,
  hasCloseIcon,
  closeIconColor,
  children,
  size,
  scrolling,
  closeConfirmation,
  Confirmation
}) => {
  const [fadeType, setFadeType] = useState('out')

  const handleClose = (e) => {
    if (e) {e.preventDefault()}
    if (!closeConfirmation) {setFadeType('out')}
    setTimeout(() => {
      onClose({ success: false })
    }, 200)
  }

  useEffect(
    () => {
      setTimeout(() => {
        if (isOpen) {setFadeType('in')}
      }, 0)
    },
    [isOpen]
  )

  if (isOpen) {
    return ReactDOM.createPortal(
      <StyledOverlay isOpen={isOpen} onClick={handleClose} fadeType={fadeType}>
        <StyledContainer
          className="intrro-modal"
          onClick={(e) => e.stopPropagation()}
          fadeType={fadeType}
          size={size}
          scrolling={scrolling}
        >
          {hasCloseIcon && (
            <StyledClose onClick={handleClose}>
              <Remove color={closeIconColor} />
            </StyledClose>
          )}
          {children}
        </StyledContainer>
        {closeConfirmation && Confirmation}
      </StyledOverlay>,
      document.body
    )
  }

  return null
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  hasCloseIcon: PropTypes.bool,
  closeIconColor: PropTypes.string,
  size: PropTypes.string,
  scrolling: PropTypes.bool,
  closeConfirmation: PropTypes.bool,
  Confirmation: PropTypes.object
}

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  hasCloseIcon: true,
  closeIconColor: null,
  size: 'default',
  scrolling: false,
  closeConfirmation: false,
  Confirmation: null
}

Modal.Header = ModalHeader
Modal.Content = ModalContent

export default Modal
