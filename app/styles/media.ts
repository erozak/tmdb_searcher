import { SimpleInterpolation } from 'styled-components';
import { theme } from 'styled-tools';

import { css } from '../styled';

export function mobile(styles: SimpleInterpolation) {
  return css`
    @media screen and (min-width: ${theme('breakpoints.mobile')}) {
      ${styles};
    }
  `;
}

export function tablet(styles: SimpleInterpolation) {
  return css`
    @media screen and (min-width: ${theme('breakpoints.tablet')}) {
      ${styles};
    }
  `;
}

export function laptop(styles: SimpleInterpolation) {
  return css`
    @media screen and (min-width: ${theme('breakpoints.laptop')}) {
      ${styles};
    }
  `;
}
