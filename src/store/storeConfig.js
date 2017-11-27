import {
  createStore,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Map } from 'immutable';
import { routerMiddleware } from 'react-router-redux';

import reducer from '@/reducers';
import sagas from '@/sagas';

const initialState = Map();

export default function storeConfig(history) {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddlewareWithHistory = routerMiddleware(history);

  const logger = createLogger({
    collapsed: () => true,
    diff: true,
    stateTransformer: state => state.toJS(),
  });

  const middleWare = process.env.NODE_ENV === 'production'
    ? applyMiddleware(sagaMiddleware, routerMiddlewareWithHistory)
    : applyMiddleware(sagaMiddleware, routerMiddlewareWithHistory, logger);

  const store = createStore(
    reducer,
    initialState,
    middleWare,
  );

  sagaMiddleware.run(sagas);

  return store;
}
