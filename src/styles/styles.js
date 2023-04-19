import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  z-index: 2;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  margin: auto;
  padding: 5rem 1rem;
  @media (max-width: 1200px) {
  }
`;

export const Description = styled(motion.div)`
z-index: 2;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;  
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const StyledButton = styled(motion.button)`
background: ${props => props.theme.mainColor};
color: ${props => props.theme.darkMain};
border: 2px solid ${props => props.theme.mainColor};
margin-right: 1rem;
&:hover{
  color:  ${props => props.theme.headerColor};
}
@media (max-width: 1300px){
    margin-bottom: 2rem;
}
`

export const Circle = styled.div`
border-radius: 50%;
width: 0.5rem;
height: 0.5rem;
margin-right: 1rem;
background: ${props => props.theme.mainColor};
`

export const Social = styled(motion.div)`
display: flex;
align-items: center;
`
