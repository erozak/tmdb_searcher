/* tslint:disable:no-magic-numbers */
import { rem } from 'polished';

import Link from '../../elements/Link';
import styled from '../../styled';

const AppNavbarLogo = styled(Link)`
  flex: 0 0 ${rem(60)};
  display: inline-flex;
  margin-right: ${rem(32)};

  & > img {
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
  }
`;

export default AppNavbarLogo;
/* tslint:enable */
