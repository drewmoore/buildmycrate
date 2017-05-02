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
    const url     = `${track.downloadUrl}?client_id=${AppConfig.soundcloudClientId}`;
    const $iframe = $('<iframe>').css('display', 'none').attr('src', url);
    $('body').append($iframe);
  }
});
