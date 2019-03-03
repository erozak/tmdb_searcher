import { em, padding, rgba, textInputs, transitions } from 'polished';
import { palette, theme } from 'styled-tools';

import styled, { css } from '../../styled';

export const searchBarFieldInputStyle = css`
  ${transitions('background-color', '0.14s ease-in-out')};
  ${padding(0, em(8), 0, em(40))};

  flex: 1 1 100%;
  color: ${theme('colors.white')};
  border: 0 none;
  min-width: 0;
  background-color: transparent;
  font-family: inherit;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.white, 0.05)};
  }

  &:focus {
    background-color: ${({ theme }) => rgba(theme.colors.realBlack, 0.24)};
  }

  &::placeholder {
    color: ${palette('primary')};
    font-family: inherit;
    opacity: 1;
  }
`;

const SearchBarGroupField = styled.span`
  flex: 1 1 auto;
  display: flex;

  & > ${textInputs(null)} {
    ${searchBarFieldInputStyle};
  }
`;

export default SearchBarGroupField;
