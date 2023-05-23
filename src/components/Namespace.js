import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { useScroll } from "../util/useScroll";
import { slideAnim } from "../animation";
function Namespace() {

    const [ref, controls] = useScroll();

  return (
    <>
     <StyledNamespace animate={controls} ref={ref} id="about" variants={slideAnim.right}>
        <Window>
            <div className="circle"></div>
            <div className="circle2 circle"></div>
            <div className="circle3 circle"></div>
        </Window>
        <p>
            <span>namespace</span> Portfolio<br/>&#123;
        </p>
            <Class>
                <span>public class</span> Maria : Person<br />
                &#123; <br/>
                <Properties>
                    <span>public int</span>  Age &#123; get; &#125; = 21;<br/>
                    <span>public string</span> City &#123; get; &#125; = "Odense";<br/>
                    <span>public string</span> Studying &#123; get; &#125; = "UCL";<br/>
                </Properties>
                &#125;
            </Class>
        &#125;
    </StyledNamespace>  
    </>

)}

const Class = styled.div`
 margin-left: 1.5rem;
    span{
        color: ${props => props.theme.keyword};
    }
`

const StyledNamespace = styled(motion.div)`
border-radius: 20px;
max-height: 19rem;
border: 4px solid var(--color-border);
background: var(--color-bg);
box-shadow: var(--color-shadow);
padding: 2rem;
transition: 0.1s ease-in-out;
flex: 2;
line-height: 130%;
animation: float 3s infinite alternate;
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}

h4{
    color: ${props => props.theme.className};
    display: inline-block;
}
p, span, div{
    font-size: 0.8rem;
    text-align: left;
    color: ${props => props.theme.headerColor};
}
span{
    color: ${props => props.theme.keyword};
}
@media (max-width: 850px){
    margin-top: 3rem;
}
`
const Window = styled(motion.div)`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin-bottom: 1rem;
.circle{
    height: 10px;
    width: 10px;
    margin-right: 0.5rem;
    border-radius: 50%;
    background: #ff5e59;
    &:nth-child(2){
        background: #ffbb2e
    }
    &:nth-child(3){
    background: #22ce32;
    }
}
`
const Properties = styled(motion.div)`
    margin-left: 1.5rem;
    span{
        color: ${props => props.theme.keyword};
    }
    `

export default Namespace