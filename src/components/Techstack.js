import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faRuler } from '@fortawesome/fontawesome-free-solid'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { useScroll } from "../util/useScroll";
import { slideAnim } from "../animation";

function Techstack() {
    const [ref, controls] = useScroll();

  return (
    <StyledTechstack animate={controls} ref={ref} variants={slideAnim.left}>
        <Header>
            <h2>Technologies</h2>
        </Header>
        <Grid>
            <StackContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                </IconContainer>
                <ul>
                    <li><h4>DATABASE</h4></li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                </ul>
            </StackContainer>
            <StackContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                </IconContainer>
                <ul>
                    <li><h4>BACK END</h4></li>
                    <li>C#</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Javascript</li>
                </ul>
            </StackContainer>
            <StackContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                </IconContainer>
                <ul>
                    <li><h4>FRONT END</h4></li>
                    <li>HTML</li>
                    <li>React</li>
                    <li>Next</li>
                </ul>
            </StackContainer>
            <StackContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faRuler}></FontAwesomeIcon>
                </IconContainer>
                <ul>
                    <li><h4>STYLING</h4></li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Tailwind CSS</li>
                    <li>Styled Components</li>
                </ul>
            </StackContainer>
        </Grid>
    </StyledTechstack>

  )
}

const StyledTechstack = styled(motion.div)`
width: 100%;
margin: 3rem 0;
`
const Grid = styled(motion.div)`
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    text-align: center;
`

const StackContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    h4{
        margin: 0.5rem 0;
    }
`

const Header = styled(motion.div)`
margin-top: 4rem;
width: 100%;
text-align: center;
`


const IconContainer = styled(motion.div)`
    background: var(--color-bg);
    padding: 1rem;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Techstack