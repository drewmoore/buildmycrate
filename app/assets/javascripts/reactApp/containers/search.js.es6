import { connect }   from 'react-redux';
import SearchForm    from '../components/search/Form.js.jsx';
import SearchHandler from '../handlers/search.js.es6';

const mapStateToProps = state => ({
  search:     state.search,
  isFetching: state.tracks.isFetching
});

const mapDispatchToProps = dispatch => ({
  submitForm(event) { SearchHandler.formSubmit(event, dispatch); }
});

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default Search;
