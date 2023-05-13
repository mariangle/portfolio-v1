import React from 'react'

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Technologies from '../components/sections/Technologies';
import Archive from '../components/sections/Archive';
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
        <Hero/>    
        <About/>
        <Technologies/>
        <Projects />
        <Archive />
        <Contact />
    </>
  )
}

export default Home