import { connect }        from 'react-redux';
import TurntablesListItem from '../../components/turntables/ListItem.js.jsx';

const mapStateToProps = (state, ownProps) => ({
  track:           state.tracks.items[ownProps.trackId] || {},
  // Set classes to override bootstrap padding to make container elements flush with track list.
  optionalClasses: (ownProps.id === 0 ? 'alpha' : 'omega')
});

const TurntablesListItemContainer = connect(mapStateToProps)(TurntablesListItem);

export default TurntablesListItemContainer;
