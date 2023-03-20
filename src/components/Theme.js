import React from 'react';
import {ThemeProvider } from 'styled-components';

const lightTheme = {
  backgroundColor: '#ffffff',
  secondBackground: "#F6F6F6",
  navBackground: "rgba(201, 201, 201, 0.3)",
  navShadow: "0 0 50px rgba(0, 0, 0, 0.2)",
  headerColor: "black",
  textColor: "#545353",
  mainColor: "#875AFB",
  scrollBar: "#CCCCCC"
};

const darkTheme = {
  backgroundColor: '#121212',
  secondBackground: "#1E1E1E",
  navBackground: "rgba(18, 18, 18, 0.3);",
  navShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  headerColor: '#ffffff',
  textColor: "#bdbdbd",
  mainColor: "#D72E82",
  scrollBar: "#3B3B3B"
};

function Theme({ children, theme }) {
  return <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>;
}

export default Theme;