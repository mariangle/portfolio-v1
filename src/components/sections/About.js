import React from "react";

import {Container} from "../../styles/styles";
import styled from "styled-components";

import AboutMe from "../AboutMe";
import Namespace from "../Namespace";
// import animations
import { pageAnim, slideAnim } from "../../animation";
import { useScroll } from "../util/useScroll";

import { motion } from "framer-motion";


const About = () => {
    const [ref, controls] = useScroll();
    
    return(
        <StyledAbout animate={controls} ref={ref}>
            <h2><span>01.</span> About Me</h2>
            <AboutContainer>
                <AboutMe variants={slideAnim.right} id="about" exit="exit" initial="hidden"/>
                <Namespace />
            </AboutContainer>
        </StyledAbout>
    )
}

const StyledAbout = styled(Container)`
max-width: 1080px;
display: block;
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