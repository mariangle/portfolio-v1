import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';

function AboutMe() {
  return (
    <StyledAboutMe>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam expedita a omnis. Dignissimos aperiam  <span>pariatur</span> et consectetur aut quisquam magni doloremque facere dolor adipisci consequatur <span>corrupti quo</span>, exercitationem quaerat. Eaque accusamus placeat impedit cum quia.</p>
      <Technologies>
        <Social>
          <Circle/>
          <li>Lorem.</li>
        </Social>
        <Social>
          <Circle/>
          <li>Lorem.</li>
        </Social>
        <Social>
          <Circle/>
          <li>Lorem.</li>
        </Social>
        <Social>
          <Circle/>
          <li>Lorem.</li>
        </Social>
      </Technologies>
    </StyledAboutMe>  
)}

const StyledAboutMe = styled(Description)`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex: 3;
margin-right: 2rem;
`

const Technologies = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
`


export default AboutMe;