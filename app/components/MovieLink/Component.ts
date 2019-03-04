/* tslint:disable:no-magic-numbers */
import { rgba, transitions } from 'polished';
import { Link } from 'react-router-dom';
import { theme as themeProp } from 'styled-tools';

import styled from '../../styled';

const MovieLink = styled(Link)`
  ${transitions('box-shadow 0.24s ease-in-out')};

  display: flex;
  border-radius: ${themeProp('others.rounded')};
  color: inherit;
  text-decoration: none;
  flex-basis: 100%;
  box-shadow: 2px 2px 1px ${({ theme }) => rgba(theme.colors.realBlack, 0.12)};

  & > * {
    flex-grow: 1;
  }

  &:hover {
    box-shadow: 4px 4px 32px
      ${({ theme }) => rgba(theme.colors.realBlack, 0.48)};
  }
`;

export default MovieLink;
