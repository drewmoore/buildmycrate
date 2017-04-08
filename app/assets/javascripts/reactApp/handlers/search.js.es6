import { push } from 'react-router-redux';
import Routes   from '../routes.js.es6';

export default class SearchHandler {
  static formSubmit(event, dispatch) {
    event.preventDefault();
    // Serialize the form to a query string and generate url for search results view.
    // Dispatch the change of location.
    dispatch(push(Routes.tracks.search($(event.target).serialize())));
  }
}
