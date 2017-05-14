import { push }      from 'react-router-redux';
import { connect }   from 'react-redux';
import SearchForm    from '../components/search/Form.js.jsx';
import RouteHelper   from '../helpers/routes.js.es6';

const mapStateToProps = state => ({
  bpmMin:       state.search.bpm_min || 120,
  bpmMax:       state.search.bpm_max,
  keySignature: state.search.key_signature,
  isFetching:   state.tracks.isFetching
});

const mapDispatchToProps = dispatch => ({
  submitForm(event) {
    event.preventDefault();
    // Serialize the form to a query string and generate url for search results view.
    // Dispatch the change of location.
    dispatch(push(RouteHelper.tracks.searchHTML($(event.target).serialize())));
  }
});

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default Search;
