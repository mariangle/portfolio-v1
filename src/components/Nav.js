import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBars, faTimes, faSun } from '@fortawesome/free-solid-svg-icons';
import { staggerAnim, slideAnim } from "../animation";
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';


const Nav = ( {toggleTheme, theme} ) => {
  const [isMenuActive, toggleMenu] = useState(false);  
  const { pathname } = useLocation();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Container>
      <StyledNav variants={slideAnim.down} initial="hidden" animate="show" >
          <Logo onClick={scrollTop}>
            <Link to="/"><h1> &lt;<span>Maria </span>/&gt;</h1></Link>
          </Logo>
          { pathname === "/" && (
            <>
            <NavLinks variants={staggerAnim} className={isMenuActive ? "active" : ""}>
              <NavLink variants={slideAnim.down}>
                <a href="#about" onClick={() => toggleMenu(false)}><span>01.</span> ABOUT</a>
              </NavLink>
              <NavLink variants={slideAnim.down}>
                  <a href="#projects" onClick={() => toggleMenu(false)}><span>02.</span> PROJECTS</a>
              </NavLink>
              <NavLink variants={slideAnim.down}>
                  <a href="#contact" onClick={() => toggleMenu(false)}><span>03.</span> CONTACT</a>
              </NavLink>
              <NavLink variants={slideAnim.down}>
                <Label className="label">
                    {theme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                    <input onClick={toggleTheme}/>
                </Label>
              </NavLink>
            </NavLinks>
            { /* MOBILE BURGER*/}
            <Burger onClick={() => toggleMenu(!isMenuActive)}>
              <FontAwesomeIcon icon={isMenuActive ? faTimes : faBars}></FontAwesomeIcon>
            </Burger>
            </>
          )}
      </StyledNav>
    </Container>
  ) 
}
const Container = styled(motion.div)`
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, var(--color-bg) 0%, rgba(0,0,0,0) 100%);
`

const StyledNav = styled(motion.nav)`
  max-width: 1080px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`

const NavLinks = styled(motion.ul)`
  display: flex;
  gap: 2rem;
  backdrop-filter: blur(10px);
  background-color: var(--color-nav);
  border: 2px solid var(--color-border);
  padding: 1rem 2rem;
  @media (max-width: 700px){
    transform: translateX(100%) !important;
    transition: 0.3s ease-in-out;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &.active{
    transform: translateX(0%) !important;
  }
`

const NavLink = styled(motion.li)`
  font-size: 0.8rem;
  a span {
    color: var(--color-main);
    font-family:  var(--font-mono);
    font-size: 0.7rem;
  }
  @media (max-width: 700px){
    font-size: 1.6rem;
    a span {
    font-size: 1.2rem;
  }
  }
`

const Burger = styled(motion.div)`
  display: none;
  color: var(--color-main);
  font-size: 1.2rem;
  @media (max-width: 700px){
    display: flex;
    align-items: center;
    background: var(--color-second);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    z-index: 2;
    justify-content: center;
  }
`

const Label = styled.label`
  cursor: pointer;
  input {
    opacity: 0;
    margin: 0;
    padding: 0;
    width:  0;
  }
`

const Logo = styled(motion.div)`
  z-index: 2;
  display: flex;
  align-items: center;
  h1{
    font-size: 1.2rem;
    font-weight: lighter;
  }
  h1 span{
    color: var(--color-main);
  }
`

export default Nav;