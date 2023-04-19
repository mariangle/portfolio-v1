import React from 'react'
import styled from 'styled-components'
import pro1img1 from "../assets/img/project1-1.jpg"

function Featured() {
  return (
    <StyledFeatured>
        <Project>
            <About>
                <p><span>Featured Project</span></p>
                <h3>Sneaker Ecommerce</h3>
                <p>Full-stack e-commerce app for buying sneakers. Designed for practical learning, built using front-end & back-end techniques.</p>
            </About>
            <Image>
                <img src={pro1img1} alt="" />
            </Image>
        </Project>
    </StyledFeatured>
  )
}

const StyledFeatured = styled.div``;

const Project = styled.div`
  display: flex;
  @media (max-width: 850px){
    display: block;
  }
`;

const About = styled.div`
  flex: 1;
`;

const Image = styled.div`
  position: relative;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.mainTint};
    z-index: 1;
  }

  &:hover::before {
    background-color: transparent;
  }
`;

export default Featured;
