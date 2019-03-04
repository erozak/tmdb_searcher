import { palette } from 'styled-tools';

import { css } from '../../styled';

export const dataListTitleStyle = css`
  color: ${palette('primary')};
  font-family: ${({ theme }) => theme.fontFamilies.condensed};
  word-break: break-all;
`;

export const dataListDescriptionStyle = css`
  margin-left: 0;
  word-break: break-all;
  color: ${palette('light')};
`;
