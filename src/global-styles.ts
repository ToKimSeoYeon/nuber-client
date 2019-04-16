import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
      font-famliy: -apple-system, system-ui, BlinkMaacSystemFont, "Segoe UI", Roboto, "Heleica Nenu", Arial, sans-serif;
  }
  a{
    color:inherit;
    text-decoration:none;
  },
  input,
  button{
    &:focus,
    &:active(outline:none)
  }
`;

export default GlobalStyle;
