import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  z-index: 2;
`;

export const About = styled(Container)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  margin: auto;
  padding: 5rem 1rem;
  @media (max-width: 1200px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

export const Description = styled(Container)`
  flex: 1 1 30rem;
  flex-wrap: wrap;
  padding-right: 5rem;

  @media (max-width: 1300px) {
    padding: 0;
  }
`;

export const Image = styled(Container)`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const StyledButton = styled(motion.button)`
background: ${props => props.theme.mainColor};
color: white;
border: 2px solid ${props => props.theme.mainColor};
margin-right: 1rem;
@media (max-width: 1300px){
    margin-bottom: 2rem;
}
`