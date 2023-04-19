import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faCodeBranch } from '@fortawesome/fontawesome-free-solid'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

function Project({project}) {
  return (
    <StyledProject>
        <Header>
            <ProjectTop>
              <StyledFontAwesomeIcon icon={faFolder}></StyledFontAwesomeIcon>
              <ul>
                {project.srcURL && <li><a href={project.srcURL} target="_blank"><FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon></a></li>}
                {project.demoURL && <li><a href={project.demoURL} target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a></li>}
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
margin-top: 2rem;
padding-bottom: 10rem;
display: flex;
flex-direction: column;
justify-content: space-between;
background: ${props => props.theme.secondBackground};
padding: 2rem;
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


const Technologies = styled.ul`
margin-top: 1rem;
display: flex;
gap: 0.5rem;
li{
  background: ${props => props.theme.thirdBackground};
  padding: 0.2rem 0.2rem;
  font-size: 0.8rem;
}
` 

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme.mainColor};
font-size: 2rem;
 ` 

export default Project