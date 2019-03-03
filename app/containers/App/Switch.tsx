import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DiscoverList from '../DiscoverList';
import FoundList from '../FoundList';
import MovieDetail from '../MovieDetail';
import NotFoundPage from '../NotFoundPage';

import { ROUTE_PATH } from './constants';

const AppSwitch: React.FunctionComponent = () => (
  <Switch>
    <Route exact path={ROUTE_PATH.root} component={DiscoverList} />
    <Route exact path={ROUTE_PATH.discover} component={DiscoverList} />
    <Route exact path={`${ROUTE_PATH.find}/:search`} component={FoundList} />
    <Route exact path={`${ROUTE_PATH.movie}/:id`} component={MovieDetail} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppSwitch;
