import React, {useState} from 'react';
// import components
import Theme from './components/Theme'
import Cursor from "./Cursor"
import GlobalStyle from './components/GlobalStyles'
import ScrollTop from "./components/ScrollTop";
// import pages
import AboutUs from './pages/About'
import Nav from './components/Nav'
import Projects from "./pages/OurWork"
import ProjectDetail from './pages/ProjectDetail'
import Contact from "./pages/Contact"
//router
import {Routes, Route, useLocation } from "react-router-dom"

function App() {
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="App">
      <Theme theme={theme}>
        <Cursor/>
        <GlobalStyle />
        <Nav toggleTheme={toggleTheme} />
        <ScrollTop />
        <Routes location={location}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Theme>
    </div>
  );
}

export default App;