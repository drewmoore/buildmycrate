import { PropTypes } from 'react';

export default class TrackSchema {
  static get PropTypes() {
    return PropTypes.shape({
      id:           PropTypes.number.isRequired,
      title:        PropTypes.string.isRequired,
      bpm:          PropTypes.number.isRequired,
      user:         PropTypes.shape({ username: PropTypes.string }).isRequired,
      keySignature: PropTypes.string,
      artworkUrl:   PropTypes.string,
      downloadUrl:  PropTypes.string,
      purchaseUrl:  PropTypes.string,
      streamable:   PropTypes.bool.isRequired
    });
  }

  static get Defaults() {
    return {
      title:        '',
      bpm:          null,
      user:         { username: '' },
      keySignature: '',
      downloadUrl:  '',
      purchaseUrl:  '',
      streamable:   false
    };
  }
}
