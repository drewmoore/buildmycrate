/* global SC */ // Allow soundcloud's SDK as a global. It is loaded via the gem used by server.
import AppConfig from './config.js.es6';

// Initialize settings and features of front-end app not related to React or Redux.
const initializeApp = (initializers) => {
  // Set an accessible client_id for soundcloud to be used in various functions.
  AppConfig.soundcloudClientId = initializers.soundcloudClientId;

  // Initialize the soundcloud SDK to be used later in various functions.
  SC.initialize({
    client_id:    AppConfig.soundcloudClientId,
    redirect_uri: `${window.location.host}/callback`
  });
};

export default initializeApp;
