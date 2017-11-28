import React from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { withRouter } from 'react-router';

import {
  onTmdbDiscoverGet,
} from '@/actions';
import { getDiscoveryParams } from '@/api/tmdb';

const DiscoverButton = props => (
  <button type="button" {...props} className="nav-item">Discover</button>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  toRefresh: (isExact) => {
    dispatch(onTmdbDiscoverGet(getDiscoveryParams()));
    if (!isExact) {
      dispatch(routerActions.push('/discover'));
    }
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { toRefresh, ...otherDispatch } = dispatchProps;
  const {
    location: { pathname },
    match,
    location,
    ...otherOwns
  } = ownProps;

  return Object.assign({}, stateProps, otherDispatch, otherOwns, {
    onClick: () => toRefresh(/^\/discover/.test(pathname)),
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(DiscoverButton));
