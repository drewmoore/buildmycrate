/*
 * Helper for communication between client and server. Better syncs routes between
 * React and Rails.
 */
export default class RouteHelper {
  static get tracks() {
    return {
      searchHTML(params) {
        // Route for rendering search results view. Results component automatically
        // launches searches when mounted.
        // TODO: allow permitted params.
        let query;
        if (typeof params === 'string') {
          query = params;
        } else {
          query = $.param(params.search);
        }
        return `/search?${query}`;
      },
      searchJSON({ search }) {
        // Route for searching for tracks with json. Feeds component props.
        return `/search.json?${$.param(search)}`;
      }
    };
  }
}
