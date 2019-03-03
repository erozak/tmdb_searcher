import { lighten, rem, rgba } from 'polished';

const colors = {
  shockingGreen: '#01d277',
  darkBlue: '#081c24',
  white: '#fff',
  black: '#212121',
  realBlack: '#000',
};

const fontFamilies = {
  title: `'Josefin Sans', sans-serif, 'Noto Serif TC', 'Microsoft JhengHei'`,
  paragraph: `'PT Sans', 'Noto Sans CJK TC', sans-serif, 'Microsoft JhengHei'`,
  condensed: `'Voltaire', 'Noto Sans CJK TC', sans-serif, 'Microsoft JhengHei'`,
};

const breakpoints = {
  laptop: '1024px',
  tablet: '768px',
  mobile: '425px',
};

const others = {
  rounded: rem(4),
};

// [normal, hover]
const palette = {
  primary: [colors.shockingGreen, lighten(0.1, colors.shockingGreen)],
  secondary: [colors.darkBlue, lighten(0.1, colors.darkBlue)],
  light: [colors.white, rgba(colors.white, 0.82)],
};
export type PaletteColors = keyof typeof palette;

export const theme = {
  colors,
  fontFamilies,
  breakpoints,
  others,
  palette,
};

export type ITheme = typeof theme;
