import { PropTypes } from 'react';

export default class TrackSchema {
  static get PropTypes() {
    return PropTypes.shape({
      id:           PropTypes.integer,
      turntables:   PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.integer })),
      title:        PropTypes.string,
      bpm:          PropTypes.number,
      user:         PropTypes.shape({ username: PropTypes.string }),
      keySignature: PropTypes.string,
      downloadUrl:  PropTypes.string,
      purchaseUrl:  PropTypes.string,
      streamable:   PropTypes.bool
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
      streamable:   ''
    };
  }
}
