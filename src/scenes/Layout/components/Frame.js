import React from 'react';
import PropTypes from 'prop-types';

import Head from './Head';
import Main from './Main';
import Foot from './Foot';

const Frame = ({ hasDetail }) => (
  <div className="wrap">
    <Head />
    <Main hasDetail={hasDetail} />
    <Foot />
  </div>
);

Frame.propTypes = {
  hasDetail: PropTypes.bool.isRequired,
};

export default Frame;
