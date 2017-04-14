import React, { PropTypes, Component } from 'react';
import TracksListItemContainer         from '../../containers/tracks/ListItem.js.jsx';
import TracksActions                   from '../../actions/tracks.js.es6';
import SearchSchema                    from '../../schemas/search.js.es6';
import TrackSchema                     from '../../schemas/track.js.es6';
import Spinner                         from './../spinner.js.jsx';


class TracksList extends Component {
  componentDidMount() {
    if (!this.props.tracks.length && !this.props.isFetching) {
      this.props.dispatch(TracksActions.fetch(this.props.search));
    }
  }

  render() {
    return (
      <div className="row section half-bottom">
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
                      <Spinner isSpinning={this.props.isFetching} optionalClasses="small" />
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
                    <TracksListItemContainer key={track.id} {...track} />
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

TracksList.propTypes = {
  tracks:     PropTypes.arrayOf(TrackSchema.PropTypes).isRequired,
  search:     SearchSchema.PropTypes.isRequired,
  dispatch:   PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default TracksList;
