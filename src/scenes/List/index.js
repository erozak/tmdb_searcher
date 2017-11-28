import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { onTmdbInit } from '@/actions';
import TMDB from '@/constants/TMDB';

import Waterfall from './components/Waterfall';

class List extends React.Component {
  componentWillMount() {
    const { toInit, location } = this.props;

    console.log(location);

    toInit(TMDB.defaultOptions.discover);
  }
  render() {
    const { toInit, ...otherProps } = this.props;

    return (
      <Waterfall {...otherProps} />
    );
  }
}

List.propTypes = {
  toInit: PropTypes.func.isRequired,
  location: PropTypes.objectOf({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    state: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = state => ({
  movies: state.getIn(['tmdb', 'movies']),
});

const mapDispatchToProps = dispatch => ({
  toInit: options => (
    dispatch(onTmdbInit(options))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
