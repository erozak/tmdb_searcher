import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onTmdbDetailGet } from '@/actions';

import Databox from './components/Databox';

class Detail extends React.Component {
  componentDidMount() {
    const { getDetail } = this.props;

    getDetail();
  }
  render() {
    const { hasDetail } = this.props;

    return hasDetail ? (
      <Databox {...this.props} />
    ) : (
      <p>Loading</p>
    );
  }
}

Detail.propTypes = {
  getDetail: PropTypes.func.isRequired,
  hasDetail: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const detail = state.getIn(['tmdb', 'detail']).toJS();
  const detailId = detail.id;
  const hasDetail = Boolean(detailId && detailId.toString().length > 0);

  return {
    detail,
    hasDetail,
  };
};

const mapDispatchToProps = dispatch => ({
  getDetailWithId: id => (
    () => dispatch(onTmdbDetailGet(id))
  ),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { getDetailWithId, ...otherDispatch } = dispatchProps;
  const { match } = ownProps;

  return Object.assign({}, stateProps, otherDispatch, ownProps, {
    getDetail: getDetailWithId(match.params.id),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Detail);
