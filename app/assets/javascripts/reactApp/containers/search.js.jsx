import { connect } from 'react-redux';
import SearchForm  from '../components/searchForm.js.jsx';

const mapStateToProps = state => ({
  search:     state.search,
  isFetching: state.tracks.isFetching
});

const Search = connect(mapStateToProps, null)(SearchForm);

export default Search;
