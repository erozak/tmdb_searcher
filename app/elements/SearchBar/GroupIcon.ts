/* tslint:disable:no-magic-numbers */
import { rem } from 'polished';
import { space, SpaceProps } from 'styled-system';

import styled from '../../styled';

const SearchBarGroupIcon = styled('span')<SpaceProps>`
  ${space};

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem(45)};
  height: 100%;
`;

export default SearchBarGroupIcon;
/* tslint:enable */
