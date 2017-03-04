import SearchActions from '../actions/search.js.es6';

export default class SearchHandler {
  static formSubmit(event, dispatch) {
    event.preventDefault();
    const $form = $(event.target);
    const searchParams = {
      bpm_min:       $form.find('input[name="bpm_min"]').val(),
      bpm_max:       $form.find('input[name="bpm_max"]').val(),
      key_signature: $form.find('select[name="key_signature"]').val()
    };
    dispatch(SearchActions.update(searchParams));
  }
}
