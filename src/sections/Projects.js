import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

import Featured from '../components/Featured';
import Archive from '../components/Archive';
import studiebnb from "../assets/videoes/studiebnb.mp4"
import ecommerce from "../assets/videoes/ecommerce.mp4"

const technologies1 = [
  "SQL",
  "React",
  "C# Web API",
  "Redux"
]

const technologies2 = [
  "MongoDB",
  "Express",
  "React",
  "Node"
]

function Projects() {
  return (
      <StyledProjects id="projects">
        <Header><span>02.</span> PROJECTS</Header>
        <FeaturedContainer>
          <Featured 
            video={ecommerce} 
            title="Sneaker Ecommerce"
            text="This e-commerce application allowed me to build on my backend knowledge from school and combine it with my self-taught front-end skills. It provides customers with the ability to log in, view, and purchase sneakers, while administrators have access to features for managing products, orders, and users. "
            link="https://github.com/mariangle/ecommerce-app-ms-sql-net-react"
            technologies={technologies1} />
          <Featured 
            video={studiebnb} 
            title="StudieBnB"
            text="StudieBnb  offers users the ability to log in, book listings, and manage their own listings. The project was developed to explore the MERN stack and writing server-side code in JavaScript"
            link="https://github.com/mariangle/mern-booking-app"
            technologies={technologies2} />
        </FeaturedContainer >
        <Archive />
      </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
  max-width: 1080px;
  padding: 5rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Header = styled(motion.h2)`
  padding-bottom: 2rem;
  display: inline-block;
`

const FeaturedContainer = styled(motion.div)`

`



export default Projects;