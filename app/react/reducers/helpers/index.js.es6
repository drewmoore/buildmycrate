// For an array, assign each item an id. Optionally merge with any additional fields
// per record that are needed for front-end app. Return object with ids for keys.
export const toCollection = (itemArray, optionalFields = {}) => (
  itemArray.reduce((accumulator, item, index) => {
    accumulator[index] = Object.assign(item, { id: index }, optionalFields);
    return accumulator;
  }, {})
);
