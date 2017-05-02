import { connect }                      from 'react-redux';
import { timeDisplay, mapTrackToProps } from '../../helpers/tracks.js.es6';
import TurntablesTrackTime              from '../../../components/turntables/track/Time.js.jsx';

const mapStateToProps = (state, ownProps) => {
  const props = {
    timeDurationDisplay: timeDisplay(ownProps.duration)
  };
  return Object.assign(props, mapTrackToProps(ownProps));
};

const TurntablesTrackTimeContainer = connect(mapStateToProps)(TurntablesTrackTime);

export default TurntablesTrackTimeContainer;
