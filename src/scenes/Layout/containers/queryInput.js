import React from 'react';
import { connect } from 'react-redux';

import {
  onTmdbQueryChange,
  onTmdbSearchGet,
} from '@/actions';

const QueryInput = props => (
  <input type="text" {...props} />
);

const mapStateToProps = state => ({
  value: state.getIn(['tmdb', 'query']),
});
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(onTmdbQueryChange(event.target.value)),
  withKeyPress: query => (event) => {
    if (event.key === 'Enter') {
      dispatch(onTmdbSearchGet(query, 1));
    }
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { value } = stateProps;
  const { withKeyPress, ...otherDispatch } = dispatchProps;

  return Object.assign({}, stateProps, otherDispatch, ownProps, {
    onKeyPress: withKeyPress(value),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(QueryInput);
