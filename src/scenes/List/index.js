import React from 'react';
import qs from 'querystring';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  onTmdbInit,
  onTmdbSearchGet,
} from '@/actions';
import { getDiscoveryParams } from '@/api/tmdb';

import Waterfall from './components/Waterfall';

function getQuery(location) {
  let doSearch = false;
  const { query } = qs.parse(location.search.substring(1));

  if (query && query.length > 0) {
    doSearch = query;
  }

  return doSearch;
}

class List extends React.Component {
  componentWillMount() {
    const {
      toInit,
      toSearch,
      noMovie,
      location,
    } = this.props;
    const query = getQuery(location);

    if (query && location.pathname === '/search') {
      toSearch(query);
    } else if (noMovie) {
      const discoveryParams = getDiscoveryParams();

      toInit(discoveryParams);
    }
  }
  render() {
    const {
      toInit,
      toSearch,
      noMovie,
      ...otherProps
    } = this.props;

    return (
      <Waterfall {...otherProps} />
    );
  }
}

List.propTypes = {
  noMovie: PropTypes.bool.isRequired,
  toInit: PropTypes.func.isRequired,
  toSearch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const movies = state.getIn(['tmdb', 'movies']);
  const noMovie = !(movies.size > 0);

  return {
    movies,
    noMovie,
  };
};

const mapDispatchToProps = dispatch => ({
  toInit: options => (
    dispatch(onTmdbInit(options))
  ),
  toSearch: options => (
    dispatch(onTmdbSearchGet(options))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
