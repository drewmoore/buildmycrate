import React                 from 'react';
import { render }            from 'react-dom';
import { Provider }          from 'react-redux';
import thunk                 from 'redux-thunk';
import { createStore, applyMiddleware }              from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware }    from 'react-router-redux';
import rootReducer           from './reducers/index.js';
import Home                  from './components/home.js.jsx';
import SearchResultTrackList from './containers/searchResultTrackList.js.jsx';
import SpinnerTimer          from './timers/spinner.js.es6';

const middleWare = applyMiddleware(thunk, routerMiddleware(browserHistory));

const renderApp  = (initialState) => {
  const store   = createStore(rootReducer, initialState, middleWare);
  const history = syncHistoryWithStore(browserHistory, store);
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/">
          <IndexRoute component={Home} />
          <Route path="search" component={SearchResultTrackList} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
  SpinnerTimer.start();
};

export default renderApp;
