import React from 'react';
import styled from 'styled-components';
// components
import {useScroll} from "../components/useScroll";
import ScrollTop from '../components/ScrollTop';
// router
import { Link } from 'react-router-dom';
// images
import athlete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"
// animations
import {motion} from "framer-motion";
import {swoop, sliderContainer, slider, pageAnimation, fadeAnim, photoAnim, lineAnim} from "../animation";

function OurWork() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();


  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <motion.div variants={sliderContainer} className="div">
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fadeAnim}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={swoop} animate={controls} initial="hidden">
        <h2>Tthe racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/the-racer">
          <img src={theracer} alt="" />
        </Link>
      </Movie>
      <Movie ref={element2} variants={fadeAnim} animate={controls2} initial="hidden">
        <h2>good times</h2>
        <div className="line"></div>
        <Link to="/projects/good-times">
          <img src={goodtimes} alt="" />
        </Link>
      </Movie>
      <ScrollTop></ScrollTop>
    </Work>
  )
}

const Hide = styled.div`
overflow: hidden;
`
const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #00AE6B;
z-index: 999;
`
const Frame2 = styled(Frame1)`
background: #F2283C;
`
const Frame3 = styled(Frame1)`
background: #277DFF;
`
const Frame4 = styled(Frame1)`
background: #FFC200;
`

const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
  padding: 1rem 0rem;
}
@media (max-width: 1300px){
  padding: 2rem 2rem;
}
`
const Movie = styled(motion.div)`
padding-bottom: 10rem;
.line{
  height: 0.5rem;
  background: ${props => props.theme.mainColor};
  margin-bottom: 3rem;
}
img{
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
`   

export default OurWork;