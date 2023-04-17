import React from "react";
// import icons
import framerMotion from "../icons/motion.png"
import sass from "../icons/sass.svg"
import react from "../icons/react.svg"
import gsap from "../icons/gsap.png"
// styles
import {About, Description, Image} from "../styles/styles";
import { motion } from "framer-motion";
import styled from "styled-components";
// import animations
import { slideAnim } from "../animation";
import { useScroll } from "./useScroll";


const AboutMe = () => {
    const [ref, controls] = useScroll();
    const [ref2, controls2] = useScroll();
    return(
            <>
                <Services id="about">
                    <Description variants={slideAnim.right} animate={controls} initial="hidden" ref={ref}>
                        <h2>Recent <span>technologies</span> I've used</h2>
                    </Description>
                    <Namespace variants={slideAnim.leftWithDelay} animate={controls2} initial="hidden" ref={ref2} >
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
                                                <span>public int</span>  Age &#123; get; &#125; = saddsa;<br />
                                                <span>public string</span> Location &#123; get; &#125; = "dsadasdsa Casddas sadsaddsa";<br />
                                                <span>public string</span>  Studying &#123; get; &#125; = "sdadsadas";<br />
                                            </div>
                                            &#125;
                                        </Class>
                                    &#125;
                                </Namespace>
                </Services>
            </>
    )
}

const Services = styled(About)`
h2{
    padding-bottom: 5rem;
    @media (max-width: 550px){
    text-align: left;
}
}
p{
    padding: 2rem 0rem 4rem 0rem;
}
@media (max-width: 1200px){
    align-items: center;
    padding: 2rem 2rem;
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

const Namespace = styled(motion.Image)`
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
export default AboutMe;