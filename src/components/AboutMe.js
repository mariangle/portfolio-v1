import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';
import { motion } from "framer-motion";

function AboutMe() {

  return (
    <StyledAboutMe>
      <motion.p >During my studies as a computer science student, I delved into back-end development and realized my natural <span>flair for UI/UX design</span>. Motivated by this realization, I began learning front-end development alongside my studies. <br /> 
      <br/>
      I aim to build upon my current back-end knowledge and combine it with my front-end skills, working towards becoming a <span>full-stack developer</span>. I am committed to explore and experiment with technologies in pursuit of building seamless and engaging user experiences.</motion.p> <br />
      <p className='bold'>Recent technologies I've used:</p>
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
p span, .bold{
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