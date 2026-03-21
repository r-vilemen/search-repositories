import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.deep};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(178.8deg, #ff7043 47.41%, #cc5935 65.18%, #994227 90.84%);
    border-radius: 20px;
  }

  ::-moz-selection {
    color: #ffff;
    background: #ff7043;
  }

  ::selection {
    color: #ffff;
    background: #ff7043;
  }
`;

export default GlobalStyles;
