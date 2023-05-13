import React from 'react'
import { Div, Container } from "../styles/styles"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Div>
      <StyledFooter>
        <p>Built with React, Framer Motion and Styled Components. Coded in VS Code.</p>
        <a href="https://github.com/mariangle/react-portfolio-styled-motion" target='_blank' rel=''>
          <FontAwesomeIcon icon={faGithub} /> 
        </a>
      </StyledFooter>
    </Div>
  )
}

const StyledFooter = styled(Container)`
  flex-direction: column;
  padding: 2rem;
  gap: 0.5rem;
  p {
    font-size: 0.7rem;
  }
`
export default Footer