import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  onTmdbSearchGet,
} from '../../../actions';

const SearchButton = ({ query, ...others }) => (
  <button type="button" {...others}>Search</button>
);

SearchButton.propTypes = {
  query: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  query: state.getIn(['tmdb', 'query']),
});

const mapDispatchToProps = dispath => ({
  onClick: query => (
    () => dispath(onTmdbSearchGet(query, 1))
  ),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { query } = stateProps;
  const { onClick } = dispatchProps;

  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onClick: onClick(query),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(SearchButton);
