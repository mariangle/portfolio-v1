import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useLocation, Link } from 'react-router-dom';

const Nav = ({toggleTheme}) => {
    const {pathname} = useLocation();
  return (
    <StyledNav>
        <h1><Link to="/" id="logo"> &lt;<span>Maria</span> /&gt;</Link></h1>
        <ul>
            <li>
               <Link className="link" to="/home">HOME</Link>
               <Line transition={{duration: 0.5}} initial={{width: "0%"}} animate={{width: pathname === "/home"  ? "100%" : "0%" }} /> 
               <Line transition={{duration: 0.5}} initial={{width: "0%"}} animate={{width: pathname === "/"  ? "100%" : "0%" }} /> 
            </li>
            <li>
                <Link className="link" to="/projects">PROJECTS</Link>
                <Line transition={{duration: 0.5}} initial={{width: "0%"}} animate={{width: pathname === "/projects" ? "100%" : "0%" }} /> 
            </li>
            <li>
                <Link className="link" to="/contact">CONTACT</Link>
                <Line transition={{duration: 0.5}} initial={{width: "0%"}} animate={{width: pathname === "/contact" ? "100%" : "0%" }} />  
            </li>
            <li>
                <Label className="label">
                    <div className="icons">
                        <FontAwesomeIcon className="icon" icon={faSun} />
                        <FontAwesomeIcon className="icon" icon={faMoon} />
                    </div>
                    <input type="checkbox" onClick={toggleTheme}/>
                    <span className="ball"></span>
                </Label>
            </li>
        </ul>
    </StyledNav>
  ) 
}

const Label = styled.label`
  cursor: pointer;
  width: 35px;
  height: 19px;
  background-color: ${(props) => props.theme.headerColor};
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  transform: scale(1.5);
  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }
  .icons {
    padding: 0px 5px;
    color: ${(props) => props.theme.backgroundColor};
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2d2e32;
    .icon {
      width: 10px;
      height: 10px;
      &:nth-child(2) {
        color: gold;
      }
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    background-color: ${(props) => props.theme.backgroundColor};
    position: absolute;
    left: 3px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }
  input:checked + .ball {
    transform: translateX(15px);
  }
`;


const StyledNav = styled.nav`
padding: 1rem 0rem;  
  display: flex;
  justify-content: center;
  margin: 0 0 0 10%;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 9999;
  top: 0;
  h1 {
    display: flex;
    align-items: center;
  }
  Label {
    display: flex;
    align-items: center; 
  }
ul{
    padding: 1.5rem 8rem;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 5vw;
    backdrop-filter: blur(5px);
    background-color: ${props => props.theme.navBackground};
    border: 2px solid ${(props) => props.theme.secondBackground};
}
li{
    bottom: 0;
    position: relative;
    a{
        left: 0%;
    }
}
#logo{
    font-size: 1.5rem;
    font-family: 'Lato', sans-serif;
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
        color: red;
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

const Line = styled(motion.div)`
height: 0.2rem;
background: ${props => props.theme.mainColor};
width: 0%;
position: absolute;
bottom: -50%;
left: 0%;
@media (max-width: 1300px){
    left: 0%;
}
`

export default Nav;