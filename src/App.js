import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import Pages from './pages';
import Reducers from './app/reducers';
import { ScrollToTop } from './app/common/utils';

const middleware = [thunk];
const store = createStore(Reducers, composeWithDevTools(applyMiddleware(...middleware)));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <Pages />
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default App;
