import { connect }    from 'react-redux';
import { mapTrackToProps, timeDisplay } from './helpers/tracks.js.es6';
import TurntableTrack from '../components/turntableTrack.js.jsx';
import Images         from '../helpers/images.js.es6';

const mapStateToProps = (state, ownProps) => {
  const props = {
    imageDisplay:        ownProps.artworkUrl || Images.trackDefault(),
    keyDisplay:          !ownProps.key ? '' : `Key: ${ownProps.key}`,
    timeElapsedDisplay:  timeDisplay(),
    timeDurationDisplay: timeDisplay(ownProps.duration),
    bpmDisplay:          ownProps.bpm ? `${ownProps.bpm} bpm` : '',
    artist:              ownProps.user ? ownProps.user.username : ''
  };
  return Object.assign(props, mapTrackToProps(ownProps));
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  play() {
    const audio = document.getElementById(`audio-for-turntable-${ownProps.turntableId}`);
    if (audio) {
      audio.play();
    }
  }
});

const TurntableTrackContainer = connect(mapStateToProps, mapDispatchToProps)(TurntableTrack);

export default TurntableTrackContainer;
