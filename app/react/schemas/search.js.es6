import { PropTypes } from 'react';

export default class SearchSchema {
  static get PropTypes() {
    return PropTypes.shape({
      bpm_min:       PropTypes.string.optional,
      bpm_max:       PropTypes.string.optional,
      key_signature: PropTypes.string.optional
    });
  }

  static get Defaults() {
    return {
      bpm_min:       '',
      bpm_max:       '',
      key_signature: ''
    };
  }
}
