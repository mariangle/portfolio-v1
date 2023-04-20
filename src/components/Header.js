import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { staggerAnim, slideAnim } from "../animation";
import { motion } from 'framer-motion';


const Header = ({toggleTheme, theme}) => {
  
  return (
    <StyledNav variants={slideAnim.down} initial="hidden" animate="show" >
        <Logo><h1> &lt;<span>Maria</span>/&gt;</h1></Logo>
        <motion.ul  variants={staggerAnim}>
            <motion.li variants={slideAnim.down}>
               <a className="link" href="#about"><span>01.</span> ABOUT</a>
            </motion.li>
            <motion.li variants={slideAnim.down}>
                <a className="link" href="#projects"><span>02.</span> PROJECTS</a>
            </motion.li>
            <motion.li variants={slideAnim.down}>
                <a className="link" href="#contact"><span>03.</span> CONTACT</a>
            </motion.li>
            <li>
              <Label className="label">
                  {theme === "light" ? <FontAwesomeIcon className="icon" icon={faMoon} /> : <FontAwesomeIcon className="icon" icon={faSun} />}
                  <input type=" " onClick={toggleTheme}/>
              </Label>
            </li>
        </motion.ul>
    </StyledNav>
  ) 
}
const Label = styled.label`
  cursor: pointer;
  input {
    opacity: 0;
    margin: 0;
    padding: 0;
    width:  0;
  }
`;

const Logo = styled.div`
h1{
  font-size: 1rem;
  font-weight: lighter;
}
`

const StyledNav = styled(motion.nav)`
  max-width: 1080px;
  padding: 1rem 0rem;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 99;
  width: 100%;
  margin: auto;
  padding: 1rem;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
ul{
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    backdrop-filter: blur(10px);
    background-color: ${props => props.theme.navBackground};
    border: 2px solid ${(props) => props.theme.secondBackground};
}
li{
    bottom: 0;
    position: relative;
    font-size: 0.8rem;
    a{
      span{
      font-family:  var(--font-mono);
    }
  }
}
#logo{
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: lighter;
    color: ${props => props.theme.headerColor};
}
@media (max-width: 700px){
    padding: 1.5rem 1rem 1.5rem 2rem;
    backdrop-filter: blur(20px);
    background-color: ${props => props.theme.navBackground};
    box-shadow: ${props => props.theme.navShadow};    flex-direction: column;
    padding: 0rem;
    margin: 0;
    ul{
        justify-content: space-evenly;
        width: 100%;
        li{
            padding: 0;
        }
    }
    #logo{
        display: inline-block;
        margin: 2rem;
    }
}
`

export default Header;