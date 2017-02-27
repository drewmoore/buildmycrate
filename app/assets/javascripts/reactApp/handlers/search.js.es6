import { updateSearch } from '../actions/search.js.es6';

export default class SearchHandler {
  static formSubmit(event, dispatch) {
    event.preventDefault();
    const $form = $(event.target);
    dispatch(updateSearch({
      bpm:           $form.find('input[name="search[bpm]"]').val(),
      key_signature: $form.find('select[name="search[key_signature]"]').val()
    }));
  }
}
