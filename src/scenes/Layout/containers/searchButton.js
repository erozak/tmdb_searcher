import React from 'react';
import qs from 'querystring';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchButton = ({ query, ...otherProps }) => {
  const { dispatch, ...others } = otherProps;

  return (
    <Link
      to={{
        pathname: '/',
        search: `?${qs.stringify({ query })}`,
      }}
      {...others}
    >Search
    </Link>
  );
};

SearchButton.propTypes = {
  query: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  query: state.getIn(['tmdb', 'query']),
});

export default connect(mapStateToProps)(SearchButton);
