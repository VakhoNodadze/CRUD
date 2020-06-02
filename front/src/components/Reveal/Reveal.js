import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledContainer, StyledInner, StyledContent } from './styled'

const Reveal = ({ children, isActive }) => {
  const containerRef = useRef()

  return (
    <StyledContainer>
      <StyledInner className="revealInner" isActive={isActive}>{children}</StyledInner>
    </StyledContainer>
  )
}

Reveal.propTypes = {
  isActive: PropTypes.bool
}

Reveal.defaultProps = {
  isActive: false
}

const RevealContent = ({ children, isHidden }) => <StyledContent className="content" isHidden={isHidden}>{children}</StyledContent>

RevealContent.propTypes = {
  isHidden: PropTypes.bool
}

RevealContent.defaultProps = {
  isHidden: false
}

Reveal.Content = RevealContent

export default Reveal
