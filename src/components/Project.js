import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";

function Project({project}) {
  return (
    <StyledProject>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Technologies>
          {project.technologies.map((technology, index) => (
              <li>{technology}</li>
          ))}
        </Technologies>
    </StyledProject>
  )
}

const StyledProject = styled(motion.div)`
padding-bottom: 10rem;
flex: display;
align-items: center;
justify-content: center;
background: ${props => props.theme.secondBackground};
padding: 2rem;
p{
  margin-top: 1rem;
}
`   

const Technologies = styled.ul`
margin-top: 1rem;
display: flex;
gap: 1rem;
li{
  background: ${props => props.theme.thirdBackground};
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
}
` 

export default Project