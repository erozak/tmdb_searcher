import React from 'react';

import { Many } from '../../globals';

import Navbar from '../../elements/Navbar';
import Logo from './Logo';

import logoSvg from '../../images/tmdb_logo_stacked_green.svg';

export interface IAppNavbarProps {
  rootPath?: string;
  children?: Many<React.ReactChild>;
}

const AppNavbar: React.FunctionComponent<IAppNavbarProps> = ({ rootPath, children }: IAppNavbarProps) => (
  <Navbar.Block>
    <Logo to={rootPath}>
      <img src={logoSvg} alt="logo of tmdb" />
    </Logo>
    {children}
  </Navbar.Block>
);

AppNavbar.defaultProps = {
  rootPath: '/'
};

export default AppNavbar;
