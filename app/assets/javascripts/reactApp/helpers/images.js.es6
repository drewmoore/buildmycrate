/*
* A helper for image asset paths, since Rails helpers aren't available client-side.
* Available image asset paths stored as data attributes on a div. This is rendered
* by Rails on the layout, before the React app is loaded and rendered.
*/

// Store the jQuery object for the paths container when found on first call.
let $pathsContainer;
const imagePaths = () => {
  if (!$pathsContainer) { $pathsContainer = $('#image-paths'); }
  if (!$pathsContainer.length) { return {}; }
  return $pathsContainer.data();
};

export default class Images {
  static spinner() {
    return imagePaths().spinner;
  }

  static downArrow() {
    return imagePaths().downArrow;
  }

  static dollarSign() {
    return imagePaths().dollarSign;
  }

  static turntableLeft() {
    return imagePaths().turntableLeft;
  }

  static turntableRight() {
    return imagePaths().turntableRight;
  }
}
