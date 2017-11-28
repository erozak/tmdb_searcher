import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import {
  onTmdbSearchGet,
} from '@/actions';

const SearchButton = props => (
  <button type="button" {...props}>Search</button>
);

SearchButton.propTypes = {
  query: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  query: state.getIn(['tmdb', 'query']),
});


const mapDispatchToProps = dispatch => ({
  toClick: (query) => {
    dispatch(onTmdbSearchGet(query));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { query, ...otherState } = stateProps;
  const { toClick, ...otherDispatch } = dispatchProps;

  return Object.assign({}, otherState, otherDispatch, ownProps, {
    onClick: () => toClick(query),
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchButton);
