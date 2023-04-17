import React, { useEffect } from 'react';
import styled from 'styled-components';
// components
import ScrollTop from '../components/ScrollTop';
// animations
import {motion} from "framer-motion";
import { projectState } from '../projectState';
import Project from '../components/Project';

function Projects() {
const projects = projectState();

  return (
    <StyledProjects id="projects">
      <h2>Featured Projects</h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <Project project={project} key={index}/> 
        ))}
      </ProjectGrid>
      <ScrollTop></ScrollTop>
    </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
    max-width: 1440px;
    margin: auto;
`

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
`


export default Projects;