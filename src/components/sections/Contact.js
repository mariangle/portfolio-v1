import React from 'react'
// animations
import {motion} from "framer-motion"
import {Container} from "../../styles/styles";
import { slideAnim, titleAnim } from "../../animation"
import styled from 'styled-components'

import { useScroll } from '../util/useScroll';


const Contact = () => { 
  const [ref, controls] = useScroll();

  
  return (
    <ContactStyle>
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
align-items: center;
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
width: 100%;
`

export default Contact;