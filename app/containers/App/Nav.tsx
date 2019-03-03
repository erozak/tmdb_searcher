import React from 'react';

import Navbar from '../../elements/Navbar';

import { ROUTE_PATH } from './constants';

const AppNav: React.FunctionComponent = () => {
  return (
    <Navbar.Nav>
      <Navbar.NavItem to={ROUTE_PATH.discover}>Discover</Navbar.NavItem>
    </Navbar.Nav>
  );
};

export default AppNav;
