import { transitions } from 'polished';
import { palette } from 'styled-tools';

import { css, PaletteColors } from '../../styled';

export interface ILinkStyleConfig {
  color?: PaletteColors;
}

export function linkStyle({ color }: ILinkStyleConfig) {
  return css`
    ${transitions('color', '0.14s ease-in-out')};

    display: inline;
    text-decoration: none;
    color: ${palette(color)};

    &:hover {
      color: ${palette(color, 1)};
    }
  `;
}

export const defaultLinkStyle: Partial<ILinkStyleConfig> = {
  color: 'primary',
};
