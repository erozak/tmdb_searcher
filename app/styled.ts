
import * as styledComponents from 'styled-components';

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    realBlack: string;
  };
  fontFamilies: {
    title: string;
    paragraph: string;
    condensed: string;
  };
  breakpoints: {
    laptop: string;
    tablet: string;
    mobile: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary: '#01d277',
    secondary: '#081c24',
    white: '#fff',
    black: '#212121',
    realBlack: '#000',
  },
  fontFamilies: {
    title: `'Josefin Sans', sans-serif, 'Noto Serif TC', 'Microsoft JhengHei'`,
    paragraph: `'PT Sans', 'Noto Sans CJK TC', sans-serif, 'Microsoft JhengHei'`,
    condensed: `'Voltaire', 'Noto Sans CJK TC', sans-serif, 'Microsoft JhengHei'`,
  },
  breakpoints: {
    laptop: '1024px',
    tablet: '768px',
    mobile: '425px',
  },
};

const styled = {
  default: styledComponents.default,
  css: styledComponents.css,
  createGlobalStyle: styledComponents.createGlobalStyle,
  keyframes: styledComponents.keyframes,
  ThemeProvider: styledComponents.ThemeProvider,
  ThemeContext: styledComponents.ThemeContext,
} as styledComponents.ThemedStyledComponentsModule<ITheme>;

const { css, createGlobalStyle, keyframes, ThemeProvider, ThemeContext } = styled;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeContext };
export default styled.default;
