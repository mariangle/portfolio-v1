import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Container } from "../../styles/styles"

const Archive = () => {
  return (
    <div>
        <StyledArchive>
          <motion.div><Link to="/archive"><h3>ARCHIVE</h3></Link></motion.div>
          <motion.p>I keep a <Link to="/archive">collection</Link> of all my projects, regardless of their quality, with the intention of tracking my progress and striving for improvement.</motion.p>
        </StyledArchive>
    </div>
  )
}

const StyledArchive = styled(Container)`
display: flex;
align-items: center;
flex-direction: column;
p{
  margin-top: 1rem;
}
p a{
  text-decoration: underline;
  color: var(--color-main);
}
`

export default Archive