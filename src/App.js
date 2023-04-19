import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyles';
import ScrollTop from './components/util/ScrollTop';
import Header from './components/Header';

import Home from './Home';

function App() {
  const [theme, setTheme] = useState('dark');
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
        <Header toggleTheme={toggleTheme} />
        <ScrollTop />
        <Home />
      </Theme>
    </div>
  );
}

export default App;