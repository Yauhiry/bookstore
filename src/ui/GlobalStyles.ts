import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body, div, h1, ul, li, input, form, button, span {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', sans-serif;
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
  }
`;

export { GlobalStyles };
