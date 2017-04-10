import { connect } from 'react-redux';
import Turntables  from '../components/turntables.js.jsx';

const mapStateToProps = state => ({
  turntables: Object.values(state.turntables.items)
});

const TurntablesContainer = connect(mapStateToProps)(Turntables);

export default TurntablesContainer;
