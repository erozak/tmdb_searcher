import { em } from 'polished';
import { theme } from 'styled-tools';

import styled from '../../styled';

const AppFrameHead = styled.div`
  position: relative;
  padding-top: ${em(48)};
  width: 100%;
  font-family: ${theme('fontFamilies.title')};
  z-index: 50;
`;

export default AppFrameHead;
