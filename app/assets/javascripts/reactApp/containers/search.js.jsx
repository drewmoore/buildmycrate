import React          from 'react';
import { connect }    from 'react-redux';
import SearchHandler  from '../handlers/search.js.es6';

const Search = connect()(({ dispatch }) => (
  <div>
    <form onSubmit={e => SearchHandler.formSubmit(e, dispatch)}>
      <label>BPM</label>
      <input name="search[bpm]" type="number" step="+1" />
      <label>Key Signature</label>
      <select name="search[key_signature]">
        <option value="C">C</option>
        <option value="Am">Am</option>
      </select>
      <button type="submit">Find Trax!</button>
    </form>
  </div>
));

export default Search;
