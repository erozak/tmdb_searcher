import { em, padding, rem, rgba, transitions } from 'polished';

import styled from '../../styled';

const NavbarBlock = styled.div`
  ${padding(rem(16), rem(32))};
  ${transitions(['max-width', 'font-size'], '0.14s ease-in-out')};

  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: ${rem(4)};
  width: 96%;
  font-size: ${em(20)};
  background-color: ${({ theme }) => rgba(theme.palette.secondary[0], 0.85)};
  z-index: 50;
`;

export default NavbarBlock;
