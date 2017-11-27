import React from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import {
  onTmdbDiscoverGet,
} from '@/actions';
import TMDB from '@/constants/TMDB';

const DiscoverButton = props => (
  <button type="button" {...props}>Discover</button>
);

const mapStateToProps = state => ({
  path: state.getIn(['routing', 'match', 'path']),
});
const mapDispatchToProps = dispatch => ({
  refresh: () => dispatch(onTmdbDiscoverGet(TMDB.defaultOptions.discover)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { path, ...otherState } = stateProps;
  const { refresh, ...otherDispatch } = dispatchProps;
  const toHome = () => routerActions.push('/');

  return Object.assign({}, otherState, otherDispatch, ownProps, {
    onClick: path === '/' ? refresh : toHome,
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(DiscoverButton);
