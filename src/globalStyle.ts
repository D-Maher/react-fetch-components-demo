import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    height: 100%;
    overflow-x: hidden;
  }

  html {
    /* Make rems easier to calculate. 62.5% of 16px is 10px, so 1rem = 10px */
    font-size: 62.5%;
  }

  body,
  textarea {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'DM Sans', sans-serif;
  }

  em {
    font-style: italic;
    text-decoration: underline;
  }
`;

export default GlobalStyle;
