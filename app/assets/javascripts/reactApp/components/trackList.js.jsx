import React, { PropTypes } from 'react';
import Track                from './track.js.jsx';

const TrackList = ({ tracks }) => (
  <div className="row section">
    <div className="col-xs-12 col-lg-offset-1 col-lg-10">
      <div className="row section console">
        <div className="col-xs-12">
          <h4>
            <span>{tracks.length} </span>
            <span>Results</span>
          </h4>
          <div className="panel">
            <div className="panel-heading">
              <div className="row">
                <div className="col-xs-3 col-lg-4">Title</div>
                <div className="col-xs-3 col-lg-4">Artist</div>
                <div className="col-xs-1 col-lg-1">BPM</div>
                <div className="col-xs-1 col-lg-1">Key</div>
                <div className=" col-xs-4 col-lg-2" />
              </div>
            </div>
            <div className="panel-body" data-hook="track-list">
              {tracks.map(track =>
                <Track key={track.id} {...track} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape(Track.propTypes).isRequired).isRequired
};

export default TrackList;
