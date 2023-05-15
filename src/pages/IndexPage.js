import React from 'react'

import Hero from "../sections/Hero"
import About from "../sections/About";
import Projects from "../sections/Projects";
import Technologies from '../sections/Technologies';
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
        <Hero/>    
        <About/>
        <Technologies/>
        <Projects />
        <Contact />
    </>
  )
}

export default Home