import React from 'react';
import { Text } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutablejs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import MainReducer from './mainReducer';

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
    <Text>Provider</Text>
  </Provider>
);

export default Store;
