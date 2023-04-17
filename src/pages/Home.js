import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Technologies from "../components/Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import { pageAnim } from "../animation";

const Home = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageAnim}
    >
      <HeroSection />    
      <Technologies />
      <Projects />
      <Contact />
    </motion.div>
  );
};

export default Home;