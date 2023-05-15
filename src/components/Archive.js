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
       <p>I'm consistently striving to improve my skills, whether it's by writing cleaner code, refining project organization, or exploring new technologies. As I look back at my previous projects, I often find areas that I believe could be improved, driven by my ongoing commitment to growth. </p>
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