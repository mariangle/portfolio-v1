import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScroll } from "../util/useScroll";
import { slideAnim } from "../animation";

function Techstack({title, technologies, icon}) {
    const [ref, controls] = useScroll();

  return (
  <StackContainer animate={controls} ref={ref} variants={slideAnim.up}>
      <IconContainer>
          <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </IconContainer>
      <ul>
          <li><h4>{title}</h4></li>
          {technologies?.map((technology) => (
              <li key={technology}>{technology}</li>
          ))}
      </ul>
 </StackContainer>
  )
}

const StackContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--color-bg);
    padding: 2rem 0;
    border-radius: 20px;
    h4{
        font-size: 0.8rem;
        margin-top: 1rem;
    }
    li{
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
`
const IconContainer = styled(motion.div)`
    background: var(--color-second);
    color: var(--color-main);
    padding: 1rem;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Techstack