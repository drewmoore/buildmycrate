import React           from 'react';
import { render }      from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import djApp           from './reducers/index.js';
import App             from './components/app.js.jsx';

const store = createStore(djApp);

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

export default renderApp;
