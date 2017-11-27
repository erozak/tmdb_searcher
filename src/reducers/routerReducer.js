import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  locationBeforeTransitions: null,
});

export default handleActions({

  [LOCATION_CHANGE]: (state, { payload }) => state.set('locationBeforeTransitions', payload),

}, initialState);
