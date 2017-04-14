import { connect }     from 'react-redux';
import TurntablesList  from '../../components/turntables/List.js.jsx';

const mapStateToProps = state => ({
  turntables: Object.values(state.turntables.items)
});

const TurntablesListContainer = connect(mapStateToProps)(TurntablesList);

export default TurntablesListContainer;
