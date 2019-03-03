import * as styledComponents from 'styled-components';

import { ITheme, PaletteColors } from './theme';

export enum CLASS_NAME {
  reactIcon = 'ri',
}

// tslint:disable-next-line:no-object-literal-type-assertion
const styled = {
  default: styledComponents.default,
  css: styledComponents.css,
  createGlobalStyle: styledComponents.createGlobalStyle,
  keyframes: styledComponents.keyframes,
  ThemeProvider: styledComponents.ThemeProvider,
  ThemeContext: styledComponents.ThemeContext,
} as styledComponents.ThemedStyledComponentsModule<ITheme>;

const {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeContext,
} = styled;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeContext,
  PaletteColors,
};
export default styled.default;
