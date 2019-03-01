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
    font-family: ${({ theme }) => theme.fontFamilies.paragraph};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default GlobalStyle;
