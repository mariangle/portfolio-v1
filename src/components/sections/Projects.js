import React, { useEffect } from 'react';
import styled from 'styled-components';
// components
import ScrollTop from '../util/ScrollTop';
// animations
import {motion} from "framer-motion";
import { projectState } from '../../projectState';
import Project from '../Project';
import Featured from '../Featured';
import { slideAnim, staggerAnim } from "../../animation"

import { useScroll } from '../util/useScroll';

function Projects() {
const projects = projectState();
const [ref, controls] = useScroll();
const [ref2, controls2] = useScroll();

  return (
    <StyledProjects id="projects">
      <FeaturedContainer animate={controls} ref={ref} variants={slideAnim.left}>
        <h2><span>02.</span> Projects</h2>
        <Featured/>
      </FeaturedContainer>
      <GridContainer>
        <h3>Other Projects</h3>
        <a href=""><span>archive</span></a>
        <ProjectGrid>
          {projects.map((project, index) => (
            <Project project={project} key={index}/> 
          ))}
        </ProjectGrid>
      </GridContainer>
    </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
    max-width: 1080px;
    padding: 1rem;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ProjectGrid = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;

`

const FeaturedContainer = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
`
const GridContainer = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
`



export default Projects;