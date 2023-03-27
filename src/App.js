import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Theme from './components/Theme';
import Cursor from './Cursor';
import GlobalStyle from './components/GlobalStyles';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Nav from './components/Nav';

function App() {
  const [theme, setTheme] = useState('light');
  const { pathname } = useLocation();

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function getTitle() {
    const path = pathname;
    if (pathname === "/"){
      return `Home`;
    } else{
      const title = path.split('/').filter((str) => str !== '').map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join('/');
      return `${title}`;
    }
  }

  useEffect(() => {
    document.title = `Maria - ${getTitle()}`;
  }, [pathname]);

  return (
    <div className="App">
      <Theme theme={theme}>
        <Cursor />
        <GlobalStyle />
        <Nav toggleTheme={toggleTheme} />
        <ScrollTop />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Theme>
    </div>
  );
}

export default App;