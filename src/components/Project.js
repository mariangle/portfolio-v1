import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/fontawesome-free-solid'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { Technologies } from '../styles/styles';
function Project({project}) {
  return (
    <StyledProject>
        <Header>
            <ProjectTop>
              <StyledFontAwesomeIcon icon={faFolder}></StyledFontAwesomeIcon>
              <ul>
                {project.srcURL && <li><a href={project.srcURL} target="_blank"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></a></li>}
                {project.demoURL && <li><a href={project.demoURL} target="_blank"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></li>}
              </ul>
            </ProjectTop>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </Header>
        <Technologies>
          {project.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
          ))}
        </Technologies>
    </StyledProject>
  )
}

const StyledProject = styled(motion.div)`
padding-bottom: 10rem;
display: flex;
flex-direction: column;
justify-content: space-between;
background: ${props => props.theme.secondBackground};
padding: 2rem;
border-radius: 10px;
p{
  font-size: 0.8rem;
}
h3{
  margin: 1rem 0 0.5rem;
}
`   

const ProjectTop = styled.div`
display: flex;
justify-content: space-between;
ul{
  display: flex;
  gap: 1rem;
}
`

const Header = styled.div`
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme.mainColor};
font-size: 2rem;
 ` 

export default Project