import { transitions } from 'polished';

import styled from '../../styled';

const AppNavbarAddons = styled.div`
  display: flex;
  margin-left: auto;
  transition: ${transitions(['margin', 'width'], '0.14s ease-in-out')};
`;

export default AppNavbarAddons;
