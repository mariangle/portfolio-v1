import React, {useState} from "react"
import styled from "styled-components"
// components
import {About} from "../styles"
import Toggle from "./Toggle"
import { useScroll } from "./useScroll"
// animations
import { LayoutGroup } from "framer-motion"
import {slideAnim} from "../animation"

const FaqSection = () => {
    const [ref, controls] = useScroll();
    return(
        <Faq variants={slideAnim.up} ref={ref} animate={controls} initial="hidden">
            <LayoutGroup>
                <h2>Questions <span>FAQ</span></h2>
                <Toggle className="question" title="Question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi!</p>
                    </div>
                </Toggle>
                <Toggle className="question" title="Question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi!</p>
                        </div>
                </Toggle>
                <Toggle className="question" title="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi!</p>
                        </div>
                </Toggle>
            </LayoutGroup> 
        </Faq>
    )
}

const Faq = styled(About)`
display: block;
span{
    display: block
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0remm;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}
@media (max-width: 1200px){
    text-align: left;
}
`

export default FaqSection