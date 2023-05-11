import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Description, Hide } from "../../styles/styles";
import { slideAnim, staggerAnim } from "../../animation";
import Wave from "../../assets/img/Wave";


const HeroSection = () => {
    return(
        <StyledContainer variants={staggerAnim} initial="hidden" animate="show">
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={slideAnim.up}>Hi, my name is </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={slideAnim.up}><span>Maria Le</span></motion.h2>
                    </Hide>
                </motion.div>
                <Hide>
                    <motion.p variants={slideAnim.up}> 
                    I have a strong passion for crafting web-based solutions with a strong emphasis on functionality and user experience. I take pride in transforming ideas into reality by creating practical and visually appealing web applications.</motion.p>
                </Hide>
                <ButtonContainer>
                    <Hide>
                        <Link to="https://github.com/mariangle" target="_blank">
                            <motion.button variants={slideAnim.up}>Github</motion.button>
                        </Link>
                    </Hide>
                </ButtonContainer>
            </Description>
            <Wave />
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
p{
    padding: 0 0 1.5rem;
}
  h2{
    font-size: 1.2rem;
    font-weight: lighter;
    margin-bottom: 0rem;
    span {
        font-family: var(--font-sans);
        font-size: 4rem;
        font-weight: bold;
    }
  }
`

const ButtonContainer = styled.div`
display: flex;
`

export default HeroSection;