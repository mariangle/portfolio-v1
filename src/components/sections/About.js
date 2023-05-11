import React from "react";

import { Container, Div} from "../../styles/styles";
import styled from "styled-components";

import AboutMe from "../AboutMe";
import Namespace from "../Namespace";
import Techstack from "../Techstack";
// import animations
import { useScroll } from "../../util/useScroll";
import { motion } from "framer-motion";
import { slideAnim } from "../../animation";


const About = () => {
    const [ref, controls] = useScroll();
    
    return(
    <Div>
        <StyledAbout>
            <motion.h2 animate={controls} ref={ref} id="about" variants={slideAnim.right}><span>01.</span> ABOUT</motion.h2>
            <AboutContainer animate={controls} ref={ref} id="about" variants={slideAnim.right}>
                <AboutMe/>
                <Namespace />
            </AboutContainer>
            <Techstack/>
        </StyledAbout>
    </Div>
    )
}

const StyledAbout = styled(Container)`
max-width: 1080px;
flex-direction: column;
align-items: flex-start;
@media (max-width: 1200px){
    padding: 2rem 2rem;
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