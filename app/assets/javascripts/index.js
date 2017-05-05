import renderApp from './reactApp/index.js.jsx';

// Initialize and render React app. Get any initial server data from element
// with data attributes for initial config, state, etc.
$(document).on('ready', function () {
  var $initializer = $('#react-app-initializer');
  renderApp($initializer.data());
});
