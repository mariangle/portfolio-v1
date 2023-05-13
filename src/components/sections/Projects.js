import React from 'react';
import styled from 'styled-components';

import {motion} from "framer-motion";
import Featured from '../Featured';
import { Div } from '../../styles/styles';

import { useScroll } from '../../util/useScroll';

function Projects() {
const [ref2, controls2] = useScroll();

  return (
      <StyledProjects id="projects">
        <FeaturedContainer>
          <h2><span>02.</span> PROJECTS</h2>
          <Featured/>
        </FeaturedContainer >
      </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
  max-width: 1080px;
  padding: 2rem;
  margin: 0 auto;
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