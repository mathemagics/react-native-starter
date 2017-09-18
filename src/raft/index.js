import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutablejs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import MainContainer from 'main/containers/mainContainer';
import MainReducer from './mainDuck';

// Middleware
const middleware = () => applyMiddleware(thunk, logger);

const store = createStore(
  combineReducers({
    main: MainReducer,
  }),
  middleware(),
);

const Store = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

export default Store;
