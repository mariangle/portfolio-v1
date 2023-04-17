import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useLocation, Link } from 'react-router-dom';

const Nav = ({toggleTheme}) => {
  return (
    <StyledNav>
        <h1><Link to="/" id="logo"> &lt;<span>Maria</span>/&gt;</Link></h1>
        <ul>
            <li>
               <a className="link" href="#about"><span>01.</span> ABOUT</a>
            </li>
            <li>
                <a className="link" href="#projects"><span>02.</span> PROJECTS</a>
            </li>
            <li>
                <a className="link" href="#contact"><span>03.</span> CONTACT</a>
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
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9999;
  width: 100%;
  margin: auto;
  padding-left: 1rem;
  top: 0;
  left: 50%;
transform: translateX(-50%);

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

export default Nav;