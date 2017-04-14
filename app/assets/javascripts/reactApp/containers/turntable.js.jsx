import { connect } from 'react-redux';
import Turntable   from '../components/turntable.js.jsx';

const mapStateToProps = (state, ownProps) => ({
  track: state.tracks.items[ownProps.trackId] || {}
});

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
