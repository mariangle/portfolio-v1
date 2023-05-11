import React from 'react';
import styled from 'styled-components';

import {motion} from "framer-motion";
import Featured from '../Featured';
import { slideAnim } from "../../animation"

import { useScroll } from '../../util/useScroll';
import { Link } from 'react-router-dom';

function Projects() {
const [ref2, controls2] = useScroll();

  return (
    <StyledProjects id="projects">
      <FeaturedContainer>
        <h2><span>02.</span> PROJECTS</h2>
        <Featured/>
      </FeaturedContainer >
      <Archive animate={controls2} ref={ref2} variants={slideAnim.up}>
        <motion.div><Link to="/archive" variants={slideAnim.up}><h3>ALL PROJECTS</h3></Link></motion.div>
        <motion.p variants={slideAnim.up}>I have an <Link to="/archive">archive</Link> of all my repositories to track my progress. In a few months, I've made notable progress. From HTML, CSS, and JavaScript to React and diverse styling libraries, I've expanded my skills to develop full stack applications using <span>various frameworks and libraries</span>. Constantly pushing myself, I'm  <span>dedicated to progress and growth</span> as a developer.</motion.p>
        </Archive>
    </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
    max-width: 1080px;
    padding: 1rem;
    margin: 5rem auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const FeaturedContainer = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
`
const Archive = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
p{
  margin-top: 1rem;
}
p a{
  text-decoration: underline;
  color: var(--color-main)
}
`



export default Projects;