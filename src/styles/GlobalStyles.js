import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-header: ${props => props.theme.headerColor};
    --color-text: ${props => props.theme.textColor};
    --color-main: ${props => props.theme.mainColor};
    --color-bg: ${props => props.theme.backgroundColor};
    --color-nav: ${props => props.theme.navBackground};
    --color-shadow: ${props => props.theme.boxShadow};
    --color-bg-2: ${props => props.theme.secondBackground};
    --color-border: ${props => props.theme.borderColor};
    --color-second: ${props => props.theme.secondColor};
    --color-gradient: ${props => props.theme.gradientColor};
    --font-mono: "Roboto Mono", sans-serif;
    --font-sans: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;  
    overflow-x:hidden;

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
    letter-spacing: 1px;
    color: var(--color-main);
    cursor: pointer;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 20px;
    background: var(--color-second);
    transition: all 0.2s ease-in-out;
    &:hover {
      background: var(--color-main);
      color: var(--color-second)
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
    line-height: 150%;
  }

  p span {
    color: var(--color-header);
  }

  h1 {
    font-size: 4rem;
  }

  h2{
    font-weight: bolder;
    font-size: 1.6rem;
    color: var(--color-header);    
    margin-bottom: 2rem;
    span{
        font-family: var(--font-mono);
        font-size: 1.2rem;
        background-image: var(--color-gradient);
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
    font-size: 1rem;
  }
  li{
    list-style: none;
  }
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background-color: var(--color-bg-2);
  }

  *::-webkit-scrollbar-thumb {
    background: var(--color-header);
    border: transparent;
    border-radius: 8px;
  }

  textarea, input{
    padding: 1rem;
    font-size: 0.8rem;
    font-family: var(--font-sans);
    width: 100%;
    margin-bottom: 1rem;
    border: none;
    background: var(--color-bg);
    border-radius: 10px;
      color: var(--color-text);
  }

  input::placeholder,  textarea::placeholder {
  color: var(--color-text);
  }

  table{
    width: 100%;
    font-size: 0.8rem;
  }
  th, td{
      padding: 0.5rem;
  }
  th{
      text-align: left;
      color: var(--color-header);
  }
  td{
      span, a{
          margin-right: 1rem;
          color: var(--color-header);
      }
  }
  td:first-child{
      color: var(--color-text);
  }
  @media (max-width: 650px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  tr{
    padding: 1rem 0;
    border-bottom: 2px solid var(--color-bg-2);
  }
}
`;

export default GlobalStyle;