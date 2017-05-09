import { connect }            from 'react-redux';
import TurntablesTrackDisplay from '../../../components/turntables/track/Display.js.jsx';
import { mapTrackToProps }    from '../../helpers/tracks.js.es6';
import Images                 from '../../../helpers/images.js.es6';

const mapStateToProps = (state, ownProps) => {
  const props = {
    imageDisplay: ownProps.artworkUrl || Images.trackDefault(),
    keyDisplay:   !ownProps.keySignature ? '' : `Key: ${ownProps.keySignature}`,
    bpmDisplay:   ownProps.bpm ? `${ownProps.bpm} bpm` : '',
    artist:       ownProps.user ? ownProps.user.username : ''
  };
  return Object.assign(props, mapTrackToProps(ownProps));
};

const TurntablesTrackDisplayContainer = connect(mapStateToProps)(TurntablesTrackDisplay);

export default TurntablesTrackDisplayContainer;
