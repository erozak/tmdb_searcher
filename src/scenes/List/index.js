import React from 'react';
import { connect } from 'react-redux';

import Waterfall from './components/Waterfall';
import { onTmdbDetailGet } from '../../actions';

const List = props => (
  <Waterfall {...props} />
);

const mapStateToProps = state => ({
  movies: state.getIn(['tmdb', 'movies']),
});

const mapDispatchToProps = dispatch => ({
  getDetail: id => (
    () => dispatch(onTmdbDetailGet(id))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
