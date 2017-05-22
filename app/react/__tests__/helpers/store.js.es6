// Set initial redux store for tests.
import { createStore } from 'redux';

const store = createStore(() => ({
  tracks:     { items: {} },
  turntables: {}
}));

export default store;
