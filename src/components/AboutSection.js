import React from "react"
import home1 from "../img/main.svg"
// about section components
import {About, Description, Image, Hide} from "../styles"
import Wave from "./Wave"
// framer motion
import {motion} from "framer-motion"
import {titleAnim, fadeAnim, photoAnim} from "../animation"

import {Link} from "react-router-dom"

const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Hi, I'm </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}> a <span>weasddasdsab asd</span></motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fadeAnim}>assdsk laskd lska sakdlka lskla sdklakl asld lask las a sdajas ksd k jjx kcj k</motion.p>
                <motion.button variants={fadeAnim}>
                    <Link className="link" to="/projects">PROJECTS</Link>
                </motion.button>
                <a href="https://github.com/mariangle" target="_blank"><motion.button variants={fadeAnim}>GITHUB</motion.button>
                </a>
            </Description>
            <Image>
                <motion.img variants={photoAnim} intitial="hidden" animate="show" src={home1} alt="" />
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection;