/* tslint:disable:no-magic-numbers */
import { em, margin, padding } from 'polished';
import { palette, theme } from 'styled-tools';

import { css } from '../../styled';

const tagStyle = css`
  ${padding(em(4), em(8), em(2))};

  font-size: ${em(14)};
  border: 1px solid ${theme('colors.white')};
  border-radius: ${em(4)};
  font-family: ${theme('fontFamilies.title')};
`;

export default tagStyle;
/* tslint:enable */
