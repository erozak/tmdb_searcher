import {
  createStore,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createSagaMonitor } from 'redux-saga-devtools';
import { Map } from 'immutable';

import reducer from '../reducers';
import sagas from '../sagas';

const initialState = Map();
export const sagaMonitor = createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ SagaMonitor: sagaMonitor });

const logger = createLogger({
  collapsed: () => true,
  diff: true,
  stateTransformer: state => state.toJS(),
});

const middleWare = process.env.NODE_ENV === 'production'
  ? applyMiddleware(sagaMiddleware)
  : applyMiddleware(logger, sagaMiddleware);

const store = createStore(
  reducer,
  initialState,
  middleWare,
);

sagaMiddleware.run(sagas);

export default store;
