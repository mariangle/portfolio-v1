import React from 'react';
import styled from 'styled-components';
// components
// animations
import {motion} from "framer-motion";
import { projectState } from '../../projectState';
import Project from '../Project';
import Featured from '../Featured';
import { slideAnim } from "../../animation"

import { useScroll } from '../util/useScroll';
import { Link } from 'react-router-dom';

function Projects() {
const projects = projectState();
const [ref, controls] = useScroll();

  return (
    <StyledProjects id="projects">
      <FeaturedContainer animate={controls} ref={ref} variants={slideAnim.up}>
        <h2><span>02.</span> Projects</h2>
        <Featured/>
      </FeaturedContainer>
      <GridContainer>
        <h3><span>Other</span> featured Projects</h3>
        <Link to="/archive"><span>view archive</span></Link>
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
    margin: 5rem auto;
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