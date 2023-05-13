import styled from "styled-components";
import { motion } from "framer-motion";

export const Div = styled(motion.div)`
background: ${props => props.theme.secondBackground};
`


export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  margin: auto;
  padding: 5rem 2rem;
`;

export const Description = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;  
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Circle = styled.div`
border-radius: 50%;
width: 0.5rem;
height: 0.5rem;
margin-right: 1rem;
background: var(--color-main);
`

export const Social = styled(motion.div)`
display: flex;
align-items: center;
`

export const Technologies = styled.ul`
display: flex;
gap: 0.5rem;
li{
  background: var(--color-second);
  color: var(--color-main);
  padding: 0.3rem 0.5rem;
  font-size: 0.7rem;
  border-radius: 20px;
}
` 