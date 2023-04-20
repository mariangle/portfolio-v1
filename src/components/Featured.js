import React from 'react'
import styled from 'styled-components'
import pro1img1 from "../assets/img/project1-1.jpg"
import { Technologies } from '../styles/styles'

function Featured() {
  return (
    <StyledFeatured>
        <Project>
            <About>
                <p><span>Featured</span></p>
                <h3>Sneaker Ecommerce</h3>
                <p>Full-stack e-commerce app for buying sneakers. Designed for practical learning, built using front-end & back-end techniques.</p>
                <Technologies>
                  <li>react</li>
                  <li>sql</li>
                  <li>.net framework</li>
                </Technologies>
                <button>hey</button>
            </About>
            <Image>
                <img src={pro1img1} alt="" />
            </Image>
        </Project>
    </StyledFeatured>
  )
}

const StyledFeatured = styled.div`
margin-bottom: 2rem;
`

const Project = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 850px){
    display: block;
  }
`

const About = styled.div`
  flex: 1;
  background: ${props => props.theme.secondBackground};
  padding: 1rem;
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
