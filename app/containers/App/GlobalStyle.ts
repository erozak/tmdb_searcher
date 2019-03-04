import { palette, theme } from 'styled-tools';

import { createGlobalStyle } from '../../styled';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1.6;
    font-family: ${theme('fontFamilies.paragraph')};
    color: ${theme('colors.white')};
    background-color: ${palette('secondary')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    image-rendering: smooth;
  }
`;

export default GlobalStyle;
