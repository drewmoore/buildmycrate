import { connect } from 'react-redux';
import { mapTrackToProps, timeDisplay } from './helpers/tracks.js.es6';
import Images      from '../helpers/images.js.es6';
import Turntable   from '../components/turntable.js.jsx';

const mapStateToProps = (state, ownProps) => {
  const track = state.tracks.items[ownProps.trackId] || {};
  const props = {
    imageDisplay:        track.artworkUrl || Images.trackDefault(),
    keyDisplay:          !track.key ? '' : `Key: ${track.key}`,
    timeElapsedDisplay:  timeDisplay(),
    timeDurationDisplay: timeDisplay(track.duration),
    bpmDisplay:          track.bpm ? `${track.bpm} bpm` : '',
    title:               track.title,
    artist:              track.user ? track.user.username : '',
    waveformUrl:         track.waveformUrl,
    downloadUrl:         track.downloadUrl,
    purchaseUrl:         track.purchaseUrl,
    streamUrl:           track.streamUrl,
    playable:            ownProps.audioUrl && ownProps.audioUrl.length
  };
  return Object.assign(props, mapTrackToProps(track));
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  play() {
    const audio = document.getElementById(`audio-for-turntable-${ownProps.id}`);
    if (audio) {
      audio.play();
    }
  }
});

const TurntableContainer = connect(mapStateToProps, mapDispatchToProps)(Turntable);

export default TurntableContainer;
