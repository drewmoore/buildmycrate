import React   from 'react';
import Spinner from '../spinner.js.jsx';

const SearchForm = ({ bpmMin, bpmMax, keySignature, isFetching, submitForm }) => (
  <div className="row">
    <div className="col-xs-12 col-lg-offset-2 col-lg-8">
      <div className="row section console">
        <div className="col-xs-12 col-lg-offset-2 col-lg-8">
          <form
            id="search"
            className="form-horizontal"
            onSubmit={submitForm}
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
                      className="form-control" type="number" defaultValue={bpmMin}
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
                    <input
                      className="form-control" type="number"
                      id="bpm_max" name="bpm_max" defaultValue={bpmMax}
                    />
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
                <div className="row">
                  <div className="col-xs-12">
                    <select
                      className="form-control" id="key_signature" name="key_signature"
                      defaultValue={keySignature}
                    >
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
                  <div className="col-xs-12 padded-top text-right">
                    <small>* Results may vary. Most tracks lack a designated key signature.</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-offset-2 col-xs-2 control-label">
                <Spinner isSpinning={isFetching} />
              </div>
              <div className="col-xs-7 text-right">
                <button type="submit">Find Tracks!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default SearchForm;
