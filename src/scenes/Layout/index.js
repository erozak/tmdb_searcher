import React from 'react';
import {
  Switch,
  Route,
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

export default Frame;
