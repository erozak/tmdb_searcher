import React from 'react';
import { connect } from 'react-redux';

import {
  onTmdbQueryChange,
} from '@/actions';

const QueryInput = props => (
  <input type="text" {...props} />
);

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(onTmdbQueryChange(event.target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QueryInput);
