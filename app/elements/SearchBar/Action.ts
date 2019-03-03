import { buttons, em, lighten, padding, transitions } from 'polished';
import { palette } from 'styled-tools';

import styled, { css } from '../../styled';

export const searchBarActionButtonStyle = css`
  ${padding(em(6), em(12), em(4))};
  ${transitions('background-color', '0.14s ease-in-out')};

  flex: 1 1 auto;
  border: 0 none;
  color: ${palette('secondary')};
  font-weight: bold;
  background-color: ${palette('primary')};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.palette.primary[0])};
  }
`;

const SearchBarAction = styled.div`
  & > ${buttons(null)} {
    ${searchBarActionButtonStyle};
  }
`;

export default SearchBarAction;
