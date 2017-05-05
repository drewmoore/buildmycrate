export default class SearchActions {
  static UPDATE_SEARCH() { return 'UPDATE_SEARCH'; }

  static update(search = {}) {
    return { type: this.UPDATE_SEARCH, search };
  }
}
