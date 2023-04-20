import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimationControls();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } if (inView < 0.1) {
      controls.start("exit");
    }
  }, [controls, inView]);

  return [ref , controls];
};