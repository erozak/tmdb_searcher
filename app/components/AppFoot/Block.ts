import { em, padding } from 'polished';
import { palette } from 'styled-tools';

import styled from '../../styled';

const AppFootBlock = styled.footer`
  ${padding(em(18), em(16), em(16))};

  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${palette('light')};
  font-size: ${em(14)};
`;

export default AppFootBlock;
