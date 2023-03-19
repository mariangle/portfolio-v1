import React from "react";
import AboutSection from "../components/AboutSection";
import Technologies from "../components/Technologies";
import FaqSection from "../components/FaqSection";
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