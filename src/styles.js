import styled from "styled-components"
import { motion } from "framer-motion";

export const About = styled(motion.div)`
z-index: 2;
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
@media (max-width: 1200px){
    display: block;
    padding: 2rem 2rem;
    text-align: center;
}
`
export const Description = styled(motion.div)`
flex: 1 1 30rem;
flex-wrap: wrap;
padding-right: 5rem;
z-index: 2;
h2{
    font-weight: lighter;
}
@media (max-width: 1300px){
    padding: 0;
    button{
        margin: 2rem 0rem 5rem 0rem;
    }
}
`
export const Image = styled(motion.div)`
z-index: 2;
flex: 1;
overflow: hidden;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`
export const Hide = styled.div`
overflow: hidden;
`

