import { palette } from 'styled-tools';

import { css } from '../../styled';
import { theme } from '../../styled/theme';

export const dataListTitleStyle = css`
  font-weight: lighter;
  color: ${palette('primary')};
  font-family: ${theme('fontFamilies.condensed')};
  word-break: break-all;
`;

export const dataListDescriptionStyle = css`
  word-break: break-all;
  color: ${palette('light')};
`;
