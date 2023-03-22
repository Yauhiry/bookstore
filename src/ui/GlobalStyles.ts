import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body, div, h1, h2, h3, ul, li, input, form, button, span, a {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
  }
  a {
    display: flex;
    text-decoration: none;
  }
`;

export { GlobalStyles };
