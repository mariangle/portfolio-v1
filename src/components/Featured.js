import React from 'react'
import styled from 'styled-components'
import { Technologies } from '../styles/styles'
import { motion } from "framer-motion"
import ecommerce from "../assets/videoes/ecommerce.mp4"
import studiebnb from "../assets/videoes/studiebnb.mp4"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/fontawesome-free-solid'

function Featured() {

  return (
    <StyledFeatured>
      <FeaturedProject>
            <Image>
                <Video src={ecommerce} alt="project_video" controls/>
            </Image>
            <About>
              <Header>
                <p>Featured</p>
                <a href="https://github.com/mariangle/ecommerce-app-ms-sql-net-react" target="_blank" rel="noopener noreferrer"><h3>Sneaker Ecommerce</h3></a>
              </Header>
              <AboutText>
                <p>This e-commerce application combines my backend knowledge from school with my self-taught front-end skills. It provides customers with the ability to log in, view, and purchase sneakers, while administrators have access to features for managing products, orders, and users. </p>
              </AboutText>
              <More>
                <Technologies>
                  <li>React</li>
                  <li>SQL</li>
                  <li>.NET WEB API</li>
                </Technologies>
                <a href="https://github.com/mariangle/ecommerce-app-ms-sql-net-react" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></a>
              </More>
            </About>
        </FeaturedProject>
        <FeaturedProject>
            <About>
              <Header>
                <p>FEATURED</p>
                <a href="https://github.com/mariangle/mern-booking-app" target="_blank" rel="noopener noreferrer"><h3>StudieBnB</h3></a>
              </Header>
              <AboutText>
                <p>StudieBnb is a redesigned Airbnb clone. It offers users the ability to log in, book listings, and manage their own listings. The project was developed to explore the MERN stack and writing server-side code in JavaScript.</p>
              </AboutText>
              <More>
                <Technologies>
                  <li>MongoDB</li>
                  <li>ExpressJS</li>
                  <li>React</li>
                  <li>NodeJS</li>
                </Technologies>
                <a href="https://github.com/mariangle/ecommerce-app-ms-sql-net-react" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></a>
              </More>
            </About>
            <Image>
                <Video src={studiebnb} alt="project_video" controls/>
            </Image>
        </FeaturedProject>
    </StyledFeatured>
  )
}

const StyledFeatured = styled(motion.div)`
margin-bottom: 2rem;
transition: 0.1s all ease-in-out;
`

const FeaturedProject = styled(motion.div)`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding: 3rem 0;
  @media (max-width: 850px){
    display: block;
  }
`

const Header = styled.div`
padding: 2rem 2rem 1rem;
p{
  font-weight: bold;
  font-size: 0.7rem;
  color: var(--color-main)
}
`
const AboutText = styled.div`
  padding: 2rem;
  background: var(--color-bg-2);
`
const More = styled.div`
padding: 1rem;
display: flex;
gap: 0.75rem;
align-items: center;
`

const About = styled.div`
  flex: 1;
`

const Image = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

export default Featured;
