import React, { PropTypes, Component } from 'react';
import Track  from './track.js.jsx';
import Images from '../helpers/images.js.es6';

import TracksActions from '../actions/tracks.js.es6';

class TrackList extends Component {
  componentDidMount() {
    this.props.dispatch(TracksActions.fetch(this.props.search));
  }

  render() {
    return (
      <div className="row section">
        <div className="col-xs-12 col-lg-offset-1 col-lg-10">
          <div className="row section console">
            <div className="col-xs-12">
              <div className="panel">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-8">
                      <h4>
                        <span>{this.props.tracks.length} </span>
                        <span>Results</span>
                      </h4>
                    </div>
                    <div className="col-xs-4 text-right">
                      <img
                        src={Images.spinner()}
                        className={`spinner small ${this.props.isFetching ? 'spinning' : ''}`}
                        alt="Loading Indicator"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 col-lg-4">Title</div>
                    <div className="col-xs-3 col-lg-4">Artist</div>
                    <div className="col-xs-1 col-lg-1">BPM</div>
                    <div className="col-xs-1 col-lg-1">Key</div>
                    <div className=" col-xs-4 col-lg-2" />
                  </div>
                </div>
                <div className="panel-body" data-hook="track-list">
                  {this.props.tracks.map(track =>
                    <Track key={track.id} {...track} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape(Track.propTypes).isRequired
  ).isRequired,
  search: PropTypes.shape({
    bpm_min:       PropTypes.string.optional,
    bpm_max:       PropTypes.string.optional,
    key_signature: PropTypes.string.optional
  }).isRequired,
  dispatch:   PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default TrackList;
