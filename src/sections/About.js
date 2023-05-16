import React from "react";

import { Container, Div} from "../styles/styles";
import styled from "styled-components";

import AboutMe from "../components/AboutMe";
import Namespace from "../components/Namespace";
// import animations
import { useScroll } from "../util/useScroll";
import { motion } from "framer-motion";
import { slideAnim } from "../animation";


const About = () => {
    const [ref, controls] = useScroll();
    
    return(
    <Div>
        <StyledAbout animate={controls} ref={ref} id="about" variants={slideAnim.up}>
            <motion.h2><span>01.</span> ABOUT</motion.h2>
            <AboutContainer>
                <AboutMe/>
                <Namespace />
            </AboutContainer>
        </StyledAbout>
    </Div>
    )
}

const StyledAbout = styled(Container)`
    padding: 0rem 2rem;
    padding-top: 5rem;
    max-width: 1080px;
    min-height: 50vh;
    flex-direction: column;
    align-items: flex-start;
`
const AboutContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    @media (max-width: 850px){
        display: block;
}
`

export default About;