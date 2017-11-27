import React from 'react';
import PropTypes from 'prop-types';

import Detail from '../../Detail';
import List from '../../List';

const Main = ({ hasDetail }) => (
  <div className="main">
    <div className="container">
      {
        hasDetail ? (<Detail />) : (<List />)
      }
    </div>
  </div>
);

Main.propTypes = {
  hasDetail: PropTypes.bool.isRequired,
};

export default Main;
