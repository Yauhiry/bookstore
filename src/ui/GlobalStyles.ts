import { createGlobalStyle } from "styled-components";
import { themeColors } from "ui";

const GlobalStyles = createGlobalStyle`
body, div, h1, h2, h3, ul, li, input, form, button, span, p, a, label {
  padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
  }
  body {
    width:100vw;
    overflow-x:hidden;
    font-family: 'Roboto', sans-serif;
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
    cursor: pointer;
  }
  a {
    display: flex;
    text-decoration: none;
  }
  ${themeColors};
  `;

export { GlobalStyles };
