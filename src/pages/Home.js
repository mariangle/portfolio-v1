import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Technologies from "../components/Technologies";
import FaqSection from "../components/FaqSection";
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
      <FaqSection />
    </motion.div>
  );
};

export default Home;