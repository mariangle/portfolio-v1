import React from 'react'
// animations
import {motion} from "framer-motion"
import { Container, Div, Hide} from "../../styles/styles";
import { slideAnim, staggerAnim } from "../../animation"
import styled from 'styled-components'

import { useScroll } from '../util/useScroll';


const Contact = () => { 
  const [ref, controls] = useScroll();

  return (
    <Div>
      <ContactStyle animate={controls} ref={ref} variants={staggerAnim} id="contact">
        <div>
          <Hide>
            <motion.h2 variants={slideAnim.up}><span>03.</span> Contact</motion.h2>
          </Hide>
        </div>
        <ContactForm>
          <motion.input type="text" placeholder="Your Name" variants={slideAnim.up}/>
          <motion.input type="text" placeholder="Your Email" variants={slideAnim.up}/>
          <motion.textarea type="text" placeholder="Your Message" rows="6" variants={slideAnim.up}/>
          <Hide>
            <motion.button variants={staggerAnim}>Submit</motion.button>
          </Hide>
        </ContactForm>
        </ContactStyle>
    </Div>
  )
}

const ContactStyle = styled(Container)`
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 650px){
  padding: 2rem;
  h3{
    font-size: 1.6rem;
  }
}
`
const ContactForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 35rem;
button{
  margin-top: 1rem;
}
`


export default Contact;