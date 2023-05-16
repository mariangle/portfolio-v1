import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Container } from "../styles/styles"
import { slideAnim } from "../animation"
import { useScroll } from '../util/useScroll';

const Archive = () => {
  const [ref, controls] = useScroll();

  return (
    <StyledArchive animate={controls} ref={ref} variants={slideAnim.up}>
      <motion.div>
        <Link to="/archive"><h3>ALL PROJECTS</h3></Link>
      </motion.div>
      <Link to="/archive"><p>View Archive</p></Link>
       <p>Looking back at my old projects, I often notice areas for improvement because I have grown and learned since then. Either way, I choose to keep them as a way to track my progress.</p>
    </StyledArchive>
  )
}

const StyledArchive = styled(Container)`
display: flex;
align-items: center;
flex-direction: column;
padding: 0;
max-width: 800px;
p, h3 {
  font-size: 0.8rem;
}
a p{
  font-size: 0.8rem;
  text-decoration: underline;
  color: var(--color-main);
  padding: 0.5rem 0;
}
`

export default Archive