import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import MainReducer from './mainDuck';
import navReducer from './navDuck';


// Middleware
const middleware = () => applyMiddleware(thunk, logger);

const store = createStore(
  combineReducers({
    main: MainReducer,
    nav: navReducer,
  }),
  middleware(),
);

export default store;
