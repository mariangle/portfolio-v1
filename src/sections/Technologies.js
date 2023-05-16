import React from 'react'
import styled from 'styled-components';
import { Container, Div } from "../styles/styles";
import Techstack from "../components/Techstack";
import { motion } from 'framer-motion';

import { faCode, faDatabase, faRuler } from '@fortawesome/fontawesome-free-solid'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { slideAnim } from "../animation";
import { useScroll } from "../util/useScroll";


const backend = {
  title: "BACK END",
  technologies: [
    "C#",
    "NodeJS",
    "ExpressJS",
    "TypeScript",
    "Prisma"
  ]
}

const frontend = {
  title: "FRONT END",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React/Redux",
    "NextJS"
  ]
}

const database = {
  title: "DATABASE",
  technologies: [
    "SQL",
    "MongoDB",
  ]
}

const styling = {
  title: "STYLING",
  technologies: [
    "SCSS",
    "TailwindCSS",
    "Styled Components",
  ]
}

const Technologies = () => {
  const [ref, controls] = useScroll();


  return (
    <Div>
      <StyledTechnologies animate={controls} ref={ref} variants={slideAnim.up}>
        <Header>TECHNOLOGIES I'VE USED</Header>
        <Grid >
          <Techstack icon={faCode} title={backend.title} technologies={backend.technologies}/>
          <Techstack icon={faLaptopCode} title={frontend.title} technologies={frontend.technologies}/>
          <Techstack icon={faDatabase} title={database.title} technologies={database.technologies}/>
          <Techstack icon={faRuler} title={styling.title} technologies={styling.technologies}/>
        </Grid>
      </StyledTechnologies>
    </Div>
  )
}

const StyledTechnologies = styled(Container)`
  flex-direction:  column;
`

const Header = styled.h3`
margin-bottom: 4rem;
`

const Grid = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: center;
`

export default Technologies