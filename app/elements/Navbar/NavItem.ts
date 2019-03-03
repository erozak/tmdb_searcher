import { em, lighten, padding, rgba, transitions } from 'polished';
import { NavLink } from 'react-router-dom';
import { palette, theme as themeProp } from 'styled-tools';

import styled from '../../styled';

export const ACTIVE_CLASSNAME = 'active';

/* tslint:disable:no-magic-numbers */
const NavbarNavItem = styled(NavLink)`
  ${padding(em(4), em(12))};
  ${transitions(['color', 'border-bottom-color'], '0.14s ease-in-out')};

  display: inline-block;
  border: 0 solid transparent;
  border-bottom-width: 2px;
  font-weight: bold;
  color: ${palette('primary')};
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => lighten(0.2, theme.palette.primary[0])};
    text-decoration: none;
  }

  &:focus {
    outline: 0 none;
    border-radius: ${themeProp('others.round')};
    background-color: ${({ theme }) => rgba(theme.colors.realBlack, 0.24)};
  }

  &.${ACTIVE_CLASSNAME} {
    border-bottom-color: ${palette('primary')};
  }
`;
/* tslint:enable:no-magic-numbers */

NavbarNavItem.defaultProps = {
  activeClassName: ACTIVE_CLASSNAME,
};

export default NavbarNavItem;
