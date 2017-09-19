import React from 'react';
import { connect } from 'react-redux';

import Waterfall from './components/Waterfall';
import { onTmdbDetailGet } from '../../actions';

const List = props => (
  <Waterfall {...props} />
);

const mapStateToProps = (state) => {
  const moviesAmount = state.getIn(['tmdb', 'movies']).size;
  const randomIndex = moviesAmount ? Math.floor(Math.random() * moviesAmount) : -1;
  const backdrop = randomIndex > -1 ? state.getIn(['tmdb', 'movies', randomIndex, 'backdrop']) : '';

  return {
    backdrop,
    movies: state.getIn(['tmdb', 'movies']),
  };
};

const mapDispatchToProps = dispatch => ({
  getDetail: id => (
    () => dispatch(onTmdbDetailGet(id))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
