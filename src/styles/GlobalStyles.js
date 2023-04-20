import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-header: ${props => props.theme.headerColor};
    --color-text: ${props => props.theme.textColor};
    --color-main: ${props => props.theme.mainColor};
    --color-bg: ${props => props.theme.backgroundColor};
    --color-scroll-track: ${props => props.theme.scrollTrack};
    --color-scroll-bar: ${props => props.theme.mainColor};
    --gradient: ${props => props.theme.gradientColor};
    --font-mono: "Roboto Mono", sans-serif;
    --font-sans: "Poppins", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 800px) {
      font-size: 75%;
    }
  }

  body {
    transition: all 0.2s ease;
    letter-spacing: 1px;
    overflow-x: hidden;
    font-family: var(--font-sans);
    background-color: var(--color-bg);
    color: var(--color-header);
  }

  button {
    color: var(--color-main);
    font-family: var(--font-mono);
    cursor: pointer;
    padding: 0.5rem;
    border: 2px solid var(--color-main);
    background: transparent;
    transition: all 0.5s ease;

    &:hover {
      background-color: transparent;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-header);
    &:hover {
      color: var(--color-main);
    }
  }

  p {
    color: var(--color-text);
    font-size: 1rem;
    line-height: 150%;
  }

  h1 {
    font-size: 4rem;
  }

  h2{
    font-weight: bolder;
    font-size: 2rem;
    color: var(--color-header);    
    margin-bottom: 2rem;
    span{
        font-family: var(--font-mono);
        font-size: 1.2rem;
    }
  } 

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
  li{
    list-style: none;
  }

  span {
    color: var(--color-main);
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: var(--color-scroll-track);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--color-scroll-bar);
    border: transparent;
    border-radius: 8px;
  }

  textarea, input{
    padding: 1rem;
    font-size: 1rem;
    font-family: var(--font-sans);
    color: var(--color-header);
    width: 100%;
    margin-bottom: 1rem;
    border: none;
    border-bottom: 2px solid var(--color-header);
    background: none;
  }
`;

export default GlobalStyle;