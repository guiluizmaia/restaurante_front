import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html, body{
    height: 100%;
    width: 100%;
    //background-color: #363636;

  }

  *, button, input {
    border: 0;
    outline: 0;
  }
`;
