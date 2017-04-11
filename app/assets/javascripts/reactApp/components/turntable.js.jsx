import React           from 'react';
import Images          from '../helpers/images.js.es6';
import TurntableSchema from '../schemas/turntable.js.es6';

const Turntable = ({
  track, imageDisplay, keyDisplay, timeElapsedDisplay, timeDurationDisplay,
  purchaseable, downloadable
}) => (
  <div className="col-xs-12 col-md-6">
    <div className="row turntable-container">
      <div className="col-xs-12 section console">
        <div className="row">
          <div className="col-xs-3">
            <img className="turntable-track-image" src={imageDisplay} alt="Track" />
          </div>
          <div className="col-xs-9">
            <div className="row">
              <div className="col-xs-9 fat-bottom">
                <span>{track.title}</span>
              </div>
              <div className="col-xs-3 fat-bottom text-right">
                <span>{!(track.bpm && track.bpm.length) ? '' : `${track.bpm} bpm`}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-9">
                <span>{track.artist}</span>
              </div>
              <div className="col-xs-3 text-right">
                <span>{keyDisplay}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-right">
            <small data-hook="time-elapsed">{timeElapsedDisplay}</small>
            <small> | </small>
            <small>{timeDurationDisplay}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 waveform-container">
            <div className="relative">
              <div className="turntable-waveform-progress" data-hook="turntable-waveform-progress">
                <img
                  className="turntable-track-waveform-image"
                  src={track.waveform} alt="Track Waveform"
                  data-hook="turntable-track-waveform"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 controls">
            {/* TODO: examine and probably remove data-hooks */}
            <img src={Images.playButton()}  data-hook="play-button"  alt="Play Button" />
            <img src={Images.pauseButton()} data-hook="pause-button" alt="Pause Button" />
            {downloadable &&
              <img
                src={Images.downArrow()}
                data-hook="download-button"
                data-download-url={track.downloadUrl}
                className="track-button"
                alt="Download Track Button"
              />
            }
            {purchaseable &&
              <a
                href={track.purchaseUrl}
                className="purchase-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Images.dollarSign()}
                  className="track-button"
                  alt="Purchase Track Button"
                />
              </a>
            }
            <audio data-hook="track-audio">
              <source src={track.audioUrl} />
            </audio>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Turntable.propTypes    = TurntableSchema.PropTypes.isRequired;
Turntable.defaultProps = TurntableSchema.Defaults;

export default Turntable;
