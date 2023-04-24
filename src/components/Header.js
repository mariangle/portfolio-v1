import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { staggerAnim, slideAnim } from "../animation";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Header = ({toggleTheme, theme}) => {
  const [isActive, setIsActive] = useState(false);  

  function handleLinkClick() {
    setIsActive(false);
  }
  
  return (
    <StyledNav variants={slideAnim.down} initial="hidden" animate="show" >
        <Logo><Link to="/"><h1> &lt;<span>Maria</span>/&gt;</h1></Link></Logo>
        <motion.ul  variants={staggerAnim} className={`${isActive ? "active" : ""}`}>
            <motion.li variants={slideAnim.down}>
              <a href="#about" onClick={handleLinkClick}><span>01.</span> ABOUT</a>
            </motion.li>
            <motion.li variants={slideAnim.down}>
                <a href="#projects" onClick={handleLinkClick}><span>02.</span> PROJECTS</a>
            </motion.li>
            <motion.li variants={slideAnim.down}>
                <a href="#contact" onClick={handleLinkClick}><span>03.</span> CONTACT</a>
            </motion.li>
            <motion.li variants={slideAnim.down}>
              <Label className="label">
                  {theme === "light" ? <FontAwesomeIcon className="icon" icon={faMoon} /> : <FontAwesomeIcon className="icon" icon={faSun} />}
                  <input onClick={toggleTheme}/>
              </Label>
            </motion.li>
        </motion.ul>
        <FontAwesomeIcon className="burger" icon={isActive ? faTimes : faBars} onClick={() => setIsActive(!isActive)}></FontAwesomeIcon>
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
  z-index: 9999;
h1{
  font-size: 1.2rem;
  font-weight: lighter;
}
`

const StyledNav = styled(motion.nav)`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 99;
  width: 100%;
  margin: auto;
  padding: 2rem;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  .burger{
    display: none;
    z-index: 9999;
    font-size: 1.2rem;
  }
  @media (max-width: 600px){
    background-color: var(--color-nav);
    border-bottom: 2px solid var(--color-border);
  }
ul{
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    backdrop-filter: blur(10px);
    background-color: var(--color-nav);
    border: 2px solid var(--color-border);
    a{
      font-size: 0.8rem;
      span{
      font-family:  var(--font-mono);
      font-size: 0.7rem;
    }
  }
}

@media (max-width: 600px){
  .burger{
    display: block;
  }
    ul{
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;    
      display: none;  
      li a, a span, svg{
        font-size: 1.6rem;
      }
    }
    ul.active{
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      overflow-x: hidden;
      border: none;
    }
}
`

export default Header;