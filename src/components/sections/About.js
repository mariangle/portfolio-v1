import React from "react";

import {Container} from "../../styles/styles";
import styled from "styled-components";

import AboutMe from "../AboutMe";
import Namespace from "../Namespace";
// import animations
import { useScroll } from "../util/useScroll";
import { motion } from "framer-motion";
import { slideAnim } from "../../animation";


const About = () => {
    const [ref, controls] = useScroll();
    
    return(
        <StyledAbout animate={controls} ref={ref} variants={slideAnim.right} id="about">
            <motion.h2><span>01.</span> About Me</motion.h2>
            <AboutContainer>
                <AboutMe/>
                <Namespace />
            </AboutContainer>
        </StyledAbout>
    )
}

const StyledAbout = styled(Container)`
max-width: 1080px;
flex-direction: column;
align-items: flex-start;
@media (max-width: 1200px){
    align-items: center;
    padding: 2rem 2rem;
}
`
const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 850px){
        display: block;
}
`


export default About;