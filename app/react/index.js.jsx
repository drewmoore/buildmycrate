import React         from 'react';
import { render }    from 'react-dom';
import { Provider }  from 'react-redux';
import thunk         from 'redux-thunk';
import { createStore, applyMiddleware }           from 'redux';
import { browserHistory }                         from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import initializeApp from './initialize.js.es6';
import rootReducer   from './reducers/index.js.es6';
import Routes        from './components/routes.js.jsx';
import SpinnerTimer  from './timers/spinner.js.es6';


const middleWare = applyMiddleware(thunk, routerMiddleware(browserHistory));

$(document).on('ready', () => {
  // Initialize settings and features of front-end app not related to React or Redux.
  const $initializer = $('#react-app-initializer');
  const store        = createStore(rootReducer, {}, middleWare);
  const history      = syncHistoryWithStore(browserHistory, store);
  initializeApp($initializer.data());
  render(
    <Provider store={store}>
      <Routes history={history} />
    </Provider>,
    document.getElementById('root')
  );
  SpinnerTimer.start();
});
