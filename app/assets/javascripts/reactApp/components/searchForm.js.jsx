import React, { PropTypes } from 'react';
import SearchHandler        from '../handlers/search.js.es6';
import Images               from '../helpers/images.js.es6';

const SearchForm = ({ isFetching, dispatch }) => (
  <div className="row">
    <div className="col-xs-12 col-lg-offset-2 col-lg-8">
      <div className="row section console">
        <div className="col-xs-12 col-lg-offset-2 col-lg-8">
          <form
            id="search"
            className="form-horizontal"
            onSubmit={e => SearchHandler.formSubmit(e, dispatch)}
          >
            <div className="form-group">
              <fieldset className="col-xs-12">
                <legend>BPM Range</legend>
                <div className="form-group">
                  <label
                    className="col-xs-offset-1 col-xs-3 control-label text-right"
                    htmlFor="bpm_min"
                  >
                    <small className="asterisk">*</small>
                    <span>Min:</span>
                  </label>
                  <div className="col-xs-7">
                    <input
                      className="form-control" type="number"
                      id="bpm_min" name="bpm_min" required="true"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-xs-offset-1 col-xs-3 control-label text-right"
                    htmlFor="bpm_max"
                  >
                    Max:
                  </label>
                  <div className="col-xs-7">
                    <input className="form-control" type="number" id="bpm_max" name="bpm_max" />
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="form-group">
              <label
                className="col-xs-offset-1 col-xs-3 control-label text-right"
                htmlFor="key_signature"
              >
                Key Signature:
              </label>
              <div className="col-xs-7">
                <select className="form-control" id="key_signature" name="key_signature">
                  <option value="" />
                  {['a', 'b', 'c', 'd', 'e', 'f', 'g'].map(baseNote => (
                    [['b', '♭'], ['', '♮'], ['#', '♯']].map(accidentalSet => (
                      ['', 'maj', 'min'].map(key => (
                        <option value={`${baseNote}${accidentalSet[0]}${key}`}>
                          {(`${baseNote} ${accidentalSet[1]}`).toUpperCase()} {key}
                        </option>
                      ))
                    ))
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-offset-2 col-xs-2 control-label">
                <img
                  src={Images.spinner()}
                  className={`spinner ${isFetching ? 'spinning' : ''}`}
                  alt="Loading Indicator"
                />
              </div>
              <div className="col-xs-7 text-right">
                <button type="submit">Find Trax!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

SearchForm.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch:   PropTypes.func.isRequired
};

export default SearchForm;
