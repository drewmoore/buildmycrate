import React         from 'react';
import { render }    from 'react-dom';
import { Provider }  from 'react-redux';
import thunk         from 'redux-thunk';
import { createStore, applyMiddleware }           from 'redux';
import { browserHistory }                         from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import rootReducer   from './reducers/index.js';
import Routes        from './components/routes.js.jsx';
import SpinnerTimer  from './timers/spinner.js.es6';

const middleWare = applyMiddleware(thunk, routerMiddleware(browserHistory));

const renderApp  = (initialState = {}) => {
  const store   = createStore(rootReducer, initialState, middleWare);
  const history = syncHistoryWithStore(browserHistory, store);
  render(
    <Provider store={store}>
      {/* Manually render Routes component so that Provider is a direct parent of Router */}
      {new Routes({ history }).render()}
    </Provider>,
    document.getElementById('root')
  );
  SpinnerTimer.start();
};

export default renderApp;
