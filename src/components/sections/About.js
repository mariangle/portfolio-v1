import React from "react";

import { Container, Div} from "../../styles/styles";
import styled from "styled-components";

import AboutMe from "../AboutMe";
import Namespace from "../Namespace";
// import animations
import { useScroll } from "../../util/useScroll";
import { motion } from "framer-motion";
import { slideAnim } from "../../animation";


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
    padding: 10rem 2rem;
    max-width: 1080px;
    min-height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 850px){
        padding: 5rem 2rem;
    }
`
const AboutContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    @media (max-width: 850px){
        display: block;
}
`

export default About;