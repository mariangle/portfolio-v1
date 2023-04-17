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
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
  }

  body {
    transition: all 0.2s ease;
    letter-spacing: 1px;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background-color: var(--color-bg);
    color: var(--color-header);
  }

  button {
    letter-spacing: 1px;
    color: var(--color-header);
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
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
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-weight: bolder;
    font-size: 3rem;
    color: var(--color-header);

    span {
      background-image: var(--gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
`;

export default GlobalStyle;