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
    transition: all 0.2s ease;
    letter-spacing: 1px;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.headerColor};
  }

  button {
    letter-spacing: 1px;
    color: ${props => props.theme.headerColor};
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 2px solid ${props => props.theme.mainColor};
    background: transparent;
    transition: all 0.5s ease;
    &:hover{
        background-color: transparent;
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
    padding: 2rem 0rem 3rem 0rem;
    font-size: 1.4rem;
    line-height: 150%;
  }
  h1{
    font-size: 4rem;
  }

  h2 {
    font-weight: bolder;
    font-size: 3rem;
    color: ${props => props.theme.headerColor};
    span{
      background-image:${props => props.theme.gradientColor};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
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
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0px;
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