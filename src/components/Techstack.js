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
    <StyledTechstack animate={controls} ref={ref} variants={slideAnim.right}>
        <Grid>
            <StackContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                </IconContainer>
                <ul>
                    <li><h4>BACK END</h4></li>
                    <li>C#</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>TypeScript</li>
                    <li>Prisma</li>
                </ul>
            </StackContainer>
            <StackContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                </IconContainer>
                <ul>
                    <li><h4>FRONT END</h4></li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React/Redux</li>
                    <li>NextJS</li>
                </ul>
            </StackContainer>
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
                    <FontAwesomeIcon icon={faRuler}></FontAwesomeIcon>
                </IconContainer>
                <ul>
                    <li><h4>STYLING</h4></li>
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
padding: 1rem;
width: 100%;
margin: auto 0;
`
const Grid = styled(motion.div)`
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    text-align: center;
`
const StackContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--color-bg);
    padding: 2rem 0;
    border-radius: 20px;
    h4{
        font-size: 0.8rem;
        margin-top: 1rem;
    }
    li{
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
`
const IconContainer = styled(motion.div)`
    background: var(--color-second);
    color: var(--color-main);
    padding: 1rem;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Techstack