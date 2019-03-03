import { space, SpaceProps } from 'styled-system';

import styled from '../../styled';

const SearchBarGroupIcon = styled('span')<SpaceProps>`
  ${space};

  order: 0;
  flex: 0 0 auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export default SearchBarGroupIcon;
