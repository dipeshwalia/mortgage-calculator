import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #F5F6F8;
    --green: #51A27E;
  }
  body {
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(212,212,255,1) 0%, rgba(0,212,255,1) 100%);
  }
`;

export default GlobalStyles;
