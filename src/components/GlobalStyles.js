import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    letter-spacing: 1px;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.headerColor};
  }

  button {
    color: ${props => props.theme.headerColor};
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid ${props => props.theme.headerColor};
    background: transparent;
    transition: all 0.5s ease;
    &:hover{
        background-color: ${props => props.theme.headerColor    };
        color: ${props => props.theme.backgroundColor};
    }
  }
  a{
    text-decoration: none;
    color: ${props => props.theme.headerColor};
    &:hover{
      color: ${props => props.theme.mainColor};
    }
  }
  p {
    color: ${props => props.theme.textColor};
    padding: 3rem 0rem;
    font-size: 1.4rem;
    line-height: 150%;
  }
  h1{
    font-size: 4rem;
  }

  h2 {
    font-weight: lighter;
    font-size: 3rem;
  }
  h3{
    font-size: 2rem;
  }

  h4 {
    font-weight: bold;
    font-size: 2rem;
  }

  span {
    font-weight: bold;
    color: ${props => props.theme.mainColor};
  }

  a {
    font-size: 1.1rem;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155,155,155,0.5,) transparent;
}
*::-webkit-scrollbar{
    width: 8px;
}
*::-webkit-scrollbar-track{
    background:  ${props => props.theme.scrollTrack};
}
*::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.scrollBar};
    border: transparent;
    border-radius: 8px;
}
`

export default GlobalStyle;