import { math } from 'polished';
import { theme } from 'styled-tools';

import { css } from '../styled';

export function mobile(styles: typeof css) {
  return css`
    @media screen and (min-width: ${theme('breakpoints.mobile')}) {
      ${styles};
    }
  `;
}

export function tablet(styles: typeof css) {
  return css`
    @media screen and (min-width: ${theme('breakpoints.tablet')}) {
      ${styles};
    }
  `;
}

export function laptop(styles: typeof css) {
  return css`
    @media screen and (min-width: ${theme('breakpoints.laptop')}) {
      ${styles};
    }
  `;
}
