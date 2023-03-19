import React, {useState} from 'react';
// global styles
import GlobalStyle from './components/GlobalStyles';
// import pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from './pages/MovieDetails';
import { ThemeProvider } from 'styled-components';
import Theme from './components/Theme';
import Cursor from "./Cursor"


// animations
import { AnimatePresence } from 'framer-motion';

//router

import {Routes, Route, useLocation } from "react-router-dom"
import ScrollTop from "./components/ScrollTop";



function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const location = useLocation();

  return (
    <div className="App">
      <Theme theme={theme}>
      <Cursor ></Cursor>
        <GlobalStyle />
        <Nav toggleTheme={toggleTheme} />
        <ScrollTop />
        <Routes location={location}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<OurWork />} />
          <Route path="/projects/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Theme>
    </div>
  );
}

export default App;