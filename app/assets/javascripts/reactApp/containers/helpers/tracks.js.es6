import AppConfig from '../../config.js.es6';

// Extract track props for components that use tracks.
export const mapTrackToProps = track => ({
  downloadable: track.downloadUrl && track.downloadUrl.length,
  purchaseable: track.purchaseUrl && track.purchaseUrl.length,
  playable:     track.audioUrl && track.audioUrl.length
});

// Set functions for event handlers, etc. that use dispatch for components that use tracks.
export const mapTrackToDispatch = (dispatch, track) => ({
  // Download track from Soundcloud. Set client_id in params from pre-initialized config.
  // TODO: dispatch action to set new track field 'downloaded'.
  download() {
    const url = `${track.downloadUrl}?client_id=${AppConfig.soundcloudClientId}`;
    window.location.replace(url);
  }
});

// Display current track time and track duration in familiar LCD-appearing format.
export const timeDisplay = (milliseconds) => {
  let minutesDisplay;
  let secondsDisplay;
  if (typeof milliseconds === 'undefined') {
    minutesDisplay = '--';
    secondsDisplay = '--';
  } else {
    const totalSeconds = milliseconds / 1000;
    const minutes      = Math.floor(totalSeconds / 60);
    const seconds      = Math.floor(totalSeconds % 60);
    minutesDisplay = minutes.toLocaleString('latn', { minimumIntegerDigits: 2 });
    secondsDisplay = seconds.toLocaleString('latn', { minimumIntegerDigits: 2 });
  }
  return `${minutesDisplay} : ${secondsDisplay}`;
};
