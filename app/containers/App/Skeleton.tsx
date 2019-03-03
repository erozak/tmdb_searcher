import React from 'react';

import AppFoot from '../../components/AppFoot';
import AppNavbar from '../../components/AppNavbar';
import { FindBarManager } from '../../components/FindBar';
import AppFrame from '../../elements/AppFrame';
import FindMovieBar from '../FindMovieBar';

import AppNav from './Nav';
import AppSwitch from './Switch';

import { ROUTE_PATH } from './constants';

const AppSkeleton: React.FunctionComponent = () => {
  return (
    <FindBarManager>
      <AppFrame.Block>
        <AppFrame.Head>
          <AppNavbar.Component rootPath={ROUTE_PATH.root}>
            <AppNav />
            <AppNavbar.Addons>
              <FindMovieBar />
            </AppNavbar.Addons>
          </AppNavbar.Component>
        </AppFrame.Head>
        <AppFrame.Main>
          <AppSwitch />
        </AppFrame.Main>
        <AppFrame.Foot>
          <AppFoot />
        </AppFrame.Foot>
      </AppFrame.Block>
    </FindBarManager>
  );
};

export default AppSkeleton;
