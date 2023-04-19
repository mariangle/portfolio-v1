import React from 'react'
// animations
import {motion} from "framer-motion"
import {Container, Circle, Social} from "../../styles/styles";
import { pageAnim, titleAnim } from "../../animation"
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContactStyle exit="exit" variants={pageAnim} initial="hidden" animate="show" id="contact">
      <div>
        <Hide>
          <motion.h2 variants={titleAnim}><span>03.</span> Contact</motion.h2>
        </Hide>
      </div>
      <div>
        <Hide>
          <label htmlFor="">
            Name:
            <input type="text" />
          </label>
        </Hide>
        <Hide>
          <label htmlFor="">
            Topic:
            <input type="text" />
          </label>        
        </Hide>
        <Hide>
          <label htmlFor="">
            Message:
            <textarea type="text" />
          </label>        
        </Hide>
        <button>Submit</button>
      </div>
      </ContactStyle>
  )
}

const ContactStyle = styled(Container)`
flex-direction: column;
align-items: flex-start;
justify-content: center;
@media (max-width: 650px){
  padding: 2rem;
  h3{
    font-size: 1.6rem;
  }
}
`

const Hide = styled.div`
overflow: hidden;
`

export default Contact;