import { em, padding } from 'polished';

import styled from '../../styled';

const AppFrameFoot = styled.div`
  ${padding(em(32), 0)};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
`;

export default AppFrameFoot;
