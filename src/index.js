import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import reducers from './reducers';
import routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import Async from './middlewares/Async'

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      {routes}
  </Provider>,
  document.getElementById('root')
);
