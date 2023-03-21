import React from "react";
// about components
import AboutSection from "../components/AboutSection";
import Technologies from "../components/Technologies";
import FaqSection from "../components/FaqSection";
// animations
import {motion} from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
    return(
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <AboutSection />    
            <Technologies/>
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs