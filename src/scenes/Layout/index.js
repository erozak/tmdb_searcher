import React from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import Detail from '@/scenes/Detail';
import List from '@/scenes/List';

import Head from './components/Head';
import Foot from './components/Foot';

const Frame = () => (
  <div className="wrap">
    <Head />
    <div className="main">
      <div className="container">
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </div>
    </div>
    <Foot />
  </div>
);

export default withRouter(connect()(Frame));
