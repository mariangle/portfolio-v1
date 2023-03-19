import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimationControls();
  const [element, inView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    } if (inView < 0.1) {
      controls.start("exit");
    }
  }, [controls, inView]);

  return [element, controls];
};