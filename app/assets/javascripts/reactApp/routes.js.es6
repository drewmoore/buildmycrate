export default class Routes {
  static get tracks() {
    return {
      search(params) {
        // TODO: modularize into class.
        // TODO: allow permitted params.
        let query;
        if (typeof params === 'string') {
          query = params;
        } else {
          query = $.param(params.search);
        }
        return `/search?${query}`;
      },
      // TODO: merge tracks#index and search
      index({ search }) {
        return `/tracks.json?${$.param(search)}`;
      }
    };
  }
}
