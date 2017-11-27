import React from 'react';
import { connect } from 'react-redux';

import Databox from './components/Databox';

const Detail = props => (
  <Databox {...props} />
);

const mapStateToProps = state => ({ ...state.getIn(['tmdb', 'detail']).toJS() });

export default connect(
  mapStateToProps,
)(Detail);
