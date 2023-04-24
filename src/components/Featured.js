import React from 'react'
import styled from 'styled-components'
import { Technologies } from '../styles/styles'
import { useScroll } from './util/useScroll';
import {motion} from "framer-motion"


function Featured() {
  const [ref, controls] = useScroll();

  return (
    <StyledFeatured animate={controls} ref={ref}>
        <Project>
            <About>
                <p><span>Featured</span></p>
                <a href="https://github.com/mariangle/ecommerce-app-ms-sql-net-react" target="_blank" rel="noopener noreferrer"><h3>Sneaker Ecommerce</h3></a>
                <p>A full-stack e-commerce app for buying sneakers</p>
                <Technologies>
                  <li>react</li>
                  <li>sql</li>
                  <li>.net framework</li>
                </Technologies>
            </About>
            <Image>
                <img alt="" />
            </Image>
        </Project>
    </StyledFeatured>
  )
}

const StyledFeatured = styled(motion.div)`
margin-bottom: 2rem;
transition: 0.1s all ease-in-out;
`

const Project = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-bg-2);
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 850px){
    display: block;
  }
  &:hover{
  transform: translateY(-5px);
}
`

const About = styled.div`
  flex: 1;
  p{
    margin-top: 1rem;
    font-size: 0.8rem;
    span{
      font-weight: bolder;
      font-family: var(--font-sans);
      font-weight: 800;
      background-image: var(--color-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

const Image = styled.div`
  position: relative;
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

export default Featured;
