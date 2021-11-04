import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: #fff;
    -webkit-font-smoothing: antialiased;
    background-image: url('./src/assets/home/background-home-desktop.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
