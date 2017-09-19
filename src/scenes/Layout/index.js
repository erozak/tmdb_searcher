import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FrameComponent from './components/Frame';
import { onTmdbInit } from '../../actions';


class Frame extends React.Component {
  componentDidMount() {
    const { toInit } = this.props;
    const randomPastYear = (new Date()).getFullYear() - (1 + Math.floor(Math.random() * 10));

    toInit({
      include_adult: false,
      include_video: false,
      language: 'en-US',
      page: 1,
      primary_release_year: randomPastYear,
      sort_by: 'popularity.des',
      'vote_average.gte': 6,
      'vote_count.gte': 100,
    });
  }
  render() {
    const { hasDetail } = this.props;

    return (
      <FrameComponent
        hasDetail={hasDetail}
      />
    );
  }
}

Frame.propTypes = {
  hasDetail: PropTypes.bool.isRequired,
  toInit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  hasDetail: !state.getIn(['tmdb', 'detail']).isEmpty(),
});

const mapDispatchToProps = dispatch => ({
  toInit: options => (
    dispatch(onTmdbInit(options))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Frame);
