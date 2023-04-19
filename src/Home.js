import React from 'react'

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

import { pageAnim } from './animation';

function Home() {
  return (
    <>
        <Hero variants={pageAnim}/>    
        <About />
        <Projects />
        <Contact />
    </>
  )
}

export default Home