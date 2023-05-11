import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';

function AboutMe() {

  return (
    <StyledAboutMe>
      <p>Studying back-end development helped me realize my natural flair towards UI/UX design. This led me to explore <span>self-taught front-end development</span> and work towards my goal of becoming a <span>full-stack developer</span>. I aim to combine my skills in both areas and continue to learn and experiment with new technologies. </p> <br />

      <li>Recent technologies I've used:</li>
        <Technologies>
          <Social>
            <Circle/>
            <li>React</li>
          </Social>
          <Social>
            <Circle/>
            <li>Javascript</li>
          </Social>
          <Social>
            <Circle/>
            <li>C#</li>
          </Social>
          <Social>
            <Circle/>
            <li>SQL</li>
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
p span{
  font-family: var(--font-sans);
  color: var(--color-header);
}
`

const Technologies = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
`


export default AboutMe;