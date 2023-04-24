import React from 'react';
import {ThemeProvider } from 'styled-components';

const lightTheme = {
  backgroundColor: "#f5f5fd",
  secondBackground: "#ffffff",
  borderColor: "#e7e3fa",
  navBackground: "rgba(245, 241, 241, 0.3)",
  headerColor: "#272727",
  textColor: "#494949",
  mainColor: "#8871e6",  
  secondColor: "#5a43b9",
  gradientColor: "linear-gradient(45deg, #8871e6, #5a43b9)",
  boxShadow: "8px 8px 18px #d4d4d4, -8px -8px 18px #ffffff",
  keyword: "blue",
  className: "#78b3da",
};

const darkTheme = {
  backgroundColor: "#242247",
  secondBackground: "#2e2c54",
  borderColor: "#393760",
  navBackground: "rgba(13, 25, 48, 0.3)",
  headerColor: '#ffffff',
  textColor: "#d8d8d8",
  mainColor: "#8871e6",
  secondColor: "#5a43b9",
  gradientColor: "linear-gradient(45deg, #8871e6, #5a43b9)",
  boxShadow: "8px 8px 18px #1e1c3b, -8px -8px 18px #2a2853",
  keyword: "#326cb8",
  className: "#389d89"
};

function Theme({ children, theme }) {
  return <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>;
}

export default Theme;