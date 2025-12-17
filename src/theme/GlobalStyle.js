import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Montserrat", sans-serif;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }


`;

export default GlobalStyle;
