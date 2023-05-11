import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import CustomCursor from './components/Cursor';
import IndexPage from './pages/IndexPage';
import ArchivePage from './pages/ArchivePage';

function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.title = "Maria Le";
  }, []);

  return (
    <div className="App">
      <Theme theme={theme}>
        <CustomCursor />
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/archive" element={<ArchivePage />} />
        </Routes>
      </Theme>
    </div>
  );
}

export default App;