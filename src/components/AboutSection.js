import React from "react"
// about section components
import {About, Description, Image, Hide} from "../styles"
import Wave from "./Wave"
// framer motion
import {motion} from "framer-motion"
import {titleAnim, fadeAnim} from "../animation"
import { useScroll } from "./useScroll";


import {Link} from "react-router-dom"
import styled from "styled-components";


const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Hi, I'm </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}> a <span>weasddasdsab asd</span></motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fadeAnim}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum perspiciatis veniam?</motion.p>
                <Link to="/projects">
                    <StyledButton variants={fadeAnim}>Projects</StyledButton>
                </Link>
                <Link to="https://github.com/mariangle" target="_blank">
                    <motion.button variants={fadeAnim}>Github</motion.button>
                </Link>
            </Description>
            <Namespace>
                <Window>
                    <div className="circle"></div>
                    <div className="circle2 circle"></div>
                    <div className="circle3 circle"></div>
                </Window>
                <p>
                    <span>namespace</span> Github<br/>&#123;
                </p>

                    <Class>
                        <span>public class</span> Maria : Person<br />
                        <div className="properties">
                            &#123;<br />
                            <span>public int</span>  Age &#123; get; &#125; = 21;<br />
                            <span>public string</span> Location &#123; get; &#125; = "Odense C, Denmark";<br />
                            <span>public string</span>  Studying &#123; get; &#125; = "UCL";<br />
                        </div>
                        &#125;
                    </Class>
                &#125;
            </Namespace>
            <Wave />
        </About>
    )
}

const StyledButton = styled(motion.button)`
background: ${props => props.theme.mainColor};
color: white;
border: 2px solid ${props => props.theme.mainColor};
margin-right: 2rem;
@media (max-width: 1300px){
    margin-bottom: 2rem;
}
`
const Class = styled.div`
 margin-left: 1rem;
    p span, p{
        font-size: 1rem;
    }
    span{
        color: ${props => props.theme.keyword};
    }
`

const Namespace = styled(Image)`
border-radius: 20px;
border: 5px solid ${props => props.theme.secondBackground};;
background: ${props => props.theme.navBackground};
padding: 1rem;
transition: 0.1s ease-in-out;
animation: float 3s infinite alternate;
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}

h4{
    color: ${props => props.theme.className};
    display: inline-block;
}
p{
    color: ${props => props.theme.headerColor};
    padding: 1rem 0 0 0;
}
p{
    text-align: left;

}
p span, p, h4{
    font-family: sans-serif;
    font-size: 1rem;
}
span{
    color: ${props => props.theme.keyword};
}
.properties{
    margin-left: 1rem;
    p span, p{
        font-size: 1rem;
    }
    span{
        color: ${props => props.theme.keyword};
    }
}
@media (max-width: 1300px){
}
@media (max-width: 500px){
    p, h4, p span{
        font-size: 80%;
    }
}
`
const Window = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: flex-start;
.circle{
    height: 10px;
    width: 10px;
    margin-right: 0.5rem;
    border-radius: 50%;
    background: #ff5e59;
    &:nth-child(2){
        background: #ffbb2e
    }
    &:nth-child(3){
    background: #22ce32;
    }
}
`

export default AboutSection;