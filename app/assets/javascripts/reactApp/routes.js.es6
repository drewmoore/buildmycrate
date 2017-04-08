export default class Routes {
  static get tracks() {
    return {
      search({ search }) {
        return `/search?${$.param(search)}`;
      },
      // TODO: merge tracks#index and search
      index({ search }) {
        return `/tracks.json?${$.param(search)}`;
      }
    };
  }
}
