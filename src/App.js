import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyles';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Nav from './components/Nav';

function App() {
  const [theme, setTheme] = useState('light');
  const { pathname } = useLocation();

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.title = "Maria Le";
  }, [pathname]);

  return (
    <div className="App">
      <Theme theme={theme}>
        <GlobalStyle />
        <Nav toggleTheme={toggleTheme} />
        <ScrollTop />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Theme>
    </div>
  );
}

export default App;