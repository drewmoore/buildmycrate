import { connect }    from 'react-redux';
import { mapTrackToProps, mapTrackToDispatch, timeDisplay  } from './helpers/tracks.js.es6';
import TurntableTrack from '../components/turntableTrack.js.jsx';
import Images         from '../helpers/images.js.es6';

const turntableAudio = ownProps => document.getElementById(`audio-for-turntable-${ownProps.turntableId}`);

const mapStateToProps = (state, ownProps) => {
  const props = {
    imageDisplay:        ownProps.artworkUrl || Images.trackDefault(),
    keyDisplay:          !ownProps.key ? '' : `Key: ${ownProps.key}`,
    timeElapsedDisplay:  timeDisplay(ownProps.timeElapsed),
    timeDurationDisplay: timeDisplay(ownProps.duration),
    bpmDisplay:          ownProps.bpm ? `${ownProps.bpm} bpm` : '',
    artist:              ownProps.user ? ownProps.user.username : ''
  };
  return Object.assign(props, mapTrackToProps(ownProps));
};

// TODO: use dispatcher with events to set further properties on track instances.
const mapDispatchToProps = (dispatch, ownProps) => (
  Object.assign(
    mapTrackToDispatch(dispatch, ownProps),
    {
      play() {
        const audio = turntableAudio(ownProps);
        if (audio) { audio.play(); }
      },
      pause() {
        const audio = turntableAudio(ownProps);
        if (audio) { audio.pause(); }
      }
    }
  )
);

const TurntableTrackContainer = connect(mapStateToProps, mapDispatchToProps)(TurntableTrack);

export default TurntableTrackContainer;
