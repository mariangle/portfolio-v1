import React from "react";
// import icons
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
import {About, Description} from "../styles";
import styled from "styled-components";
// import animations
import { slideAnim } from "../animation";
import { useScroll } from "./useScroll";
import {motion} from "framer-motion";


const ServicesSection = () => {
    const [ref, controls] = useScroll();
    return( 
            <div>
                <Services>
                    <Description variants={slideAnim.right} animate={controls} initial="hidden" ref={ref}>
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
                    <Techstack variants={slideAnim.leftWithDelay} animate={controls} initial="hidden" ref={ref} >
                            <h3>Techstack</h3>
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                            <img src={gsap} alt="" />   
                            <img src={csharp} alt="" />
                            <img src={sql} alt="" />
                            <img src={sc} alt="" />
                    </Techstack>
                </Services>
            </div>
    )
}
const Techstack = styled(motion.div)`
flex: 1;
margin-top: 5rem;
align-items: center;
justify-content: center;
display: flex;
border-radius: 20px;
background: ${props => props.theme.secondBackground};
padding: 2rem;
display: block;

h3{
    margin: 2rem 0rem;
    font-size: 1.6rem;
}
img{
    height: 35px;
    margin-right: 1rem;
}
`
const Services = styled(About)`
min-height: 0vh;
padding: 0rem 10rem 5rem 10rem;
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