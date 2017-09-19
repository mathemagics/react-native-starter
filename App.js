import React from 'react';
import { Provider } from 'react-redux';
import MainNav from 'nav/mainNav';

import store from 'raft';

export default () => (
  <Provider store={store}>
    <MainNav />
  </Provider>
);
