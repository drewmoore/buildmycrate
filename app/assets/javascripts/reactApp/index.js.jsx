import React        from 'react';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk        from 'redux-thunk';
import rootReducer  from './reducers/index.js';
import App          from './components/app.js.jsx';
import SpinnerTimer from './timers/spinner.js.es6';

const store = createStore(rootReducer, applyMiddleware(thunk));

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  SpinnerTimer.start();
};

export default renderApp;
