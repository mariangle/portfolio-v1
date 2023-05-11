import React from 'react'

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
        <Hero/>    
        <About/>
        <Projects />
        <Contact />
    </>
  )
}

export default Home