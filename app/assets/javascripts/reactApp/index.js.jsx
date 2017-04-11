/* global SC */ // Allow soundcloud's SDK as a global. It is loaded via the gem used by server.
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
const renderApp  = (initializers = {}) => {
  SC.initialize({
    client_id:    initializers.soundcloud.client_id,
    redirect_uri: `${window.location.host}/callback`
  });
  const store   = createStore(rootReducer, {}, middleWare);
  const history = syncHistoryWithStore(browserHistory, store);
  render(
    <Provider store={store}>
      <Routes history={history} />
    </Provider>,
    document.getElementById('root')
  );
  SpinnerTimer.start();
};

export default renderApp;
