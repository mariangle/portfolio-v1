import React from 'react';
import styled from 'styled-components';
// components
import {useScroll} from "../components/useScroll";
import ScrollTop from '../components/ScrollTop';
// router
import { Link } from 'react-router-dom';
// images
import athlete from "../img/project1.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"
// animations
import {motion} from "framer-motion";
import {swoop, sliderContainer, sliderAnim, pageAnim, fadeAnim, photoAnim, slideAnim} from "../animation";

function Projects() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  
  return (
    <Work exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <motion.div variants={sliderContainer} className="div">
        <Frame1 variants={sliderAnim}></Frame1>
        <Frame2 variants={sliderAnim}></Frame2>
        <Frame3 variants={sliderAnim}></Frame3>
        <Frame4 variants={sliderAnim}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fadeAnim}>Projekt</motion.h2>
        <motion.p variants={slideAnim.leftWithDelay}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vitae temporibus fugiat delectus sapiente vel laudantium suscipit ipsum debitis. Doloremque.</motion.p>
        <Link to="/projects/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={slideAnim.right} animate={controls} initial="hidden">Projekt</motion.h2>
        <motion.p variants={slideAnim.right} animate={controls} initial="hidden"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vitae temporibus fugiat delectus sapiente vel laudantium suscipit ipsum debitis. Doloremque.</motion.p>
        <Link to="/projects/the-racer">
          <motion.img ref={element} variants={slideAnim.leftWithDelay} animate={controls} initial="hidden" src={theracer} alt="" />
        </Link>
      </Movie>
      <Movie ref={element2} variants={fadeAnim} animate={controls2} initial="hidden">
        <h2>Projekt</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vitae temporibus fugiat delectus sapiente vel laudantium suscipit ipsum debitis. Doloremque.</p>
        <Link to="/projects/good-times">
          <img src={goodtimes} alt="" />
        </Link>
      </Movie>
      <ScrollTop></ScrollTop>
    </Work>
  )
}

const Hide = styled.div`
display: flex;
justify-content: center;
overflow: hidden;
`
const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 0%;
width: 100%;
height: 100vh;
background: ${props => props.theme.mainColor};
z-index: 999;
`
const Frame2 = styled(Frame1)`
background: ${props => props.theme.secondColor};
`
const Frame3 = styled(Frame1)`
background: ${props => props.theme.mainColor};
`
const Frame4 = styled(Frame1)`
background: ${props => props.theme.secondColor};
`

const Work = styled(motion.div)`
width: 70%;
margin: auto;
overflow: hidden;
padding: 5rem 10rem;
@media (max-width: 1300px){
  padding: 2rem 2rem;
}
@media (max-width: 1600px){
  width: 100%;
}
`
const Movie = styled(motion.div)`
padding-bottom: 10rem;
flex: display;
align-items: center;
justify-content: center;
.line{
  height: 0.5rem;
  background: ${props => props.theme.mainColor};
  margin-bottom: 3rem;
}
img{
  width: 80%;
  height: 80%;
  object-fit: cover;
  @media (max-width: 600px){
  width: 100%;
  height: 100%;
}
}
`   

export default Projects;