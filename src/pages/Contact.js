import React from 'react'
// animations
import {motion} from "framer-motion"
import { pageAnimation, titleAnim } from "../animation"
// styles
import styled from 'styled-components'

const ContactUs = () => {
  return (
    <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in <span>touch.</span></motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle/>
            <h3>marianguyenle17@gmail.com</h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle/>
            <h3>senc mesagge aks</h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle/>
            <h3>senc mesagge aks</h3>
          </Social> 
          </Hide>
      </div>
      </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
h3{
  font-weight: lighter;
  margin: 2rem;
}
padding: 5rem 10rem;
min-height: 90vh;
@media (max-width: 650px){
  padding: 2rem;
  h3{
    font-size: 1.6rem;
  }
}
`

const Title = styled.div`
@media (max-width: 1300px){
  margin-top: 5rem;
}
margin-bottom: 4rem;
`

const Hide = styled.div`
overflow: hidden;
`
const Circle = styled.div`
border-radius: 50%;
width: 1rem;
height: 1rem;
background: ${props => props.theme.mainColor};
`

const Social = styled(motion.div)`
display: flex;
align-items: center;
h2{
  margin: 2rem;
}`

export default ContactUs;