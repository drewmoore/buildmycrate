import { PropTypes } from 'react';
import TrackSchema   from './track.js.es6';

export default class TurntableSchema {
  static get PropTypes() {
    return PropTypes.shape({
      id:         PropTypes.integer,
      trackId:    PropTypes.integer,
      track:      TrackSchema.PropTypes,
      audioUrl:   PropTypes.string,
      isFetching: PropTypes.bool
    });
  }

  static get Defaults() {
    return {
      track: {}
    };
  }
}
