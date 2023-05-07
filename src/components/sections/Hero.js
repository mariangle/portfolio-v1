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
                        <motion.h2 variants={slideAnim.up}><span>Maria</span></motion.h2>
                    </Hide>
                </motion.div>
                <Hide>
                    <motion.p variants={slideAnim.up}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia quisquam illo sapiente doloribus repellendus temporibus porro magni, excepturi cum cumque? Commodi ipsum expedita quasi sed atque ullam ea modi ipsa consequuntur!
                    </motion.p>
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
    font-family: var(--font-mono);
    margin-bottom: 0rem;
    span {
        font-family: var(--font-sans);
        font-size: 4rem;
        font-weight: 800;
        background-image: var(--color-gradient);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  }
`

const ButtonContainer = styled.div`
display: flex;
`

export default HeroSection;