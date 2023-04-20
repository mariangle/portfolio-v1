import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Description, Hide } from "../../styles/styles";
import { titleAnim, fadeAnim, staggerAnim } from "../../animation";
import Wave from "../../assets/img/Wave";


const HeroSection = () => {
    return(
        <StyledContainer variants={staggerAnim} initial="hidden" animate="show">
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Hi, I'm </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}> a <span>Lorem, ipsum.</span></motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fadeAnim}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia quisquam illo sapiente doloribus repellendus temporibus porro magni, excepturi cum cumque? Commodi ipsum expedita quasi sed atque ullam ea modi ipsa consequuntur!</motion.p>
                <ButtonContainer>
                    <Link to="https://github.com/mariangle" target="_blank">
                        <motion.button variants={fadeAnim}>Github</motion.button>
                    </Link>
                </ButtonContainer>
            </Description>
            <Wave />
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
p{
    padding: 2rem 0;
}
  h2{
    font-size: 3rem;
    margin-bottom: 0rem;
    span {
        font-family: var(--font-sans);
        font-size: 3rem;
        background-image: var(--gradient);
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