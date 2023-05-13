import React from 'react'
import styled from 'styled-components';
import { Container, Div } from "../../styles/styles";
import Techstack from "../Techstack";


const Technologies = () => {
  return (
    <Div>
      <StyledTechnologiess>
        <Header>TECHNOLOGIES</Header>
        <Techstack />
      </StyledTechnologiess>
    </Div>
  )
}

const StyledTechnologiess = styled(Container)`
  min-height: 60vh;
  flex-direction:  column;
`

const Header = styled.h3`
margin-bottom: 2rem;
`


export default Technologies