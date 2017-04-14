import { connect } from 'react-redux';
import ListItem    from '../../components/tracks/ListItem.js.jsx';
import { mapTrackToProps, mapTrackToDispatch } from '../helpers/tracks.js.es6';

const mapStateToProps = (state, ownProps) => {
  const props = {
    turntables: Object.values(state.turntables.items),
  };
  return Object.assign(props, mapTrackToProps(ownProps));
};

const mapDispatchToProps = (dispatch, ownProps) => mapTrackToDispatch(dispatch, ownProps);

const TracksListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ListItem);

export default TracksListItemContainer;
