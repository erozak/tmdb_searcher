/* tslint:disable:no-magic-numbers */
import { rgba } from 'polished';
import { theme as themeProp } from 'styled-tools';

import { css } from '../../styled';

export const cardBlockStyle = css`
  display: flex;
  border-radius: ${themeProp('others.rounded')};
  background-color: ${({ theme }) => rgba(theme.palette.secondary[0], 0.85)};
`;
