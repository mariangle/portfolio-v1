import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimationControls();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("show");
    } if (!inView) {
      controls.start("exit");
    }
  }, [controls, inView]);

  return [ref , controls];
};