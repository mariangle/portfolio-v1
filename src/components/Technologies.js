import React from "react";
import framerMotion from "../icons/motion.png"
import sass from "../icons/sass.svg"
import js from "../icons/javascript.svg"
import react from "../icons/react.svg"

import html from "../icons/html.png"
import css from "../icons/css.png"
import csharp from "../icons/csharp.png"
import sql from "../icons/sql.png"
import sc from "../icons/sc.png"
import gsap from "../icons/gsap.png"


// styles

import {About, Description, Image, } from "../styles";
import styled from "styled-components";
import { fadeAnim, slideLeft, slideRight} from "../animation";
import { useScroll } from "./useScroll";
import {motion} from "framer-motion";


const ServicesSection = () => {
    const [element, controls] = useScroll();
    return( 
            <div>
                <Services>
                    <Description variants={slideRight} animate={controls} initial="hidden" ref={element}>
                        <h2>Recent <span>technologies</span> I've used</h2>
                        <Cards>
                            <Card>
                                <div className="icon">
                                    <img src={react} alt="" />
                                    <h3>React</h3>
                                </div>
                            </Card>
                            <Card>
                                <div className="icon">
                                    <img src={sass} alt="" />
                                    <h3>Sass</h3>
                                </div>
                            </Card>
                            <Card>
                                <div className="icon">
                                    <img src={gsap} alt="" />
                                    <h3>GSAP</h3>
                                </div>
                            </Card>
                            <Card>
                                <div className="icon">
                                    <img src={framerMotion} alt="" />
                                    <h3>Framer Motion</h3>
                                </div>
                            </Card>
                        </Cards>
                    </Description>
                    <Test variants={slideLeft} animate={controls} initial="hidden" ref={element}>
                        <div className="Test">
                        <h3>Other Technologies</h3>
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                            <img src={gsap} alt="" />   
                            <img src={csharp} alt="" />
                            <img src={sql} alt="" />
                            <img src={sc} alt="" />
                            
                        </div> 
                    </Test>
                </Services>
            </div>
    )
}

const Test = styled(motion.div)`
flex: 1;
margin-top: 5rem;
align-items: center;
justify-content: center;
display: flex;
border-radius: 20px;
background: ${props => props.theme.secondBackground};
padding: 2rem;
h3{
    margin: 2rem;
    font-size: 1.6rem;

}
img{
    height: 40px;
    margin: 2rem;
}
`

const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    padding: 2rem 0rem 4rem 0rem;
}
@media (max-width: 1200px){
    align-items: center;
}
`

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
@media (max-width: 1300px){
    justify-content: center;
}
`

const Card = styled.div`
flex-basis: 20rem;
img{
        height: 100%;
        width: 50px;
    }
.icon{
    padding: 1rem;
    display: flex;
    align-items: center;
    h3{
        font-size: 1.6rem;
        margin-left: 1rem;
        padding: 1rem;
    }
}
`


export default ServicesSection;