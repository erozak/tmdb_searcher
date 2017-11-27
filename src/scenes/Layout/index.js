import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import { onTmdbInit } from '@/actions';
import TMDB from '@/constants/TMDB';

import FrameComponent from './components/Frame';

class Frame extends React.Component {
  componentDidMount() {
    const { toInit } = this.props;

    toInit(TMDB.defaultOptions.discover);
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
