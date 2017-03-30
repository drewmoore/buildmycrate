import React          from 'react';
import { render }     from 'react-dom';
import { Provider }   from 'react-redux';
import { createStore, applyMiddleware }      from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory  from 'history/createBrowserHistory';
import thunk          from 'redux-thunk';
import rootReducer    from './reducers/index.js';
import App            from './components/app.js.jsx';
import SpinnerTimer   from './timers/spinner.js.es6';

const history    = createHistory();
const middleWare = applyMiddleware(thunk, routerMiddleware(history));

const renderApp  = (initialState) => {
  const store = createStore(rootReducer(initialState), middleWare);
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
  SpinnerTimer.start();
};

export default renderApp;
