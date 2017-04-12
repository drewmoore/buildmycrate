import React           from 'react';
import TrackSchema from '../schemas/track.js.es6';
import Images          from '../helpers/images.js.es6';

const TurntableTrack = ({
  title, artist, waveformUrl, downloadUrl, purchaseUrl, audioUrl, turntableId,
  imageDisplay, keyDisplay, timeElapsedDisplay, timeDurationDisplay,
  bpmDisplay, purchaseable, downloadable, playable, play
}) => (
  <div>
    <div className="row">
      <div className="col-xs-3">
        <img className="turntable-track-image" src={imageDisplay} alt="Track" />
      </div>
      <div className="col-xs-9">
        <div className="row">
          <div className="col-xs-9 fat-bottom">
            <span>{title}</span>
          </div>
          <div className="col-xs-3 fat-bottom text-right">
            <span>{bpmDisplay}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-9">
            <span>{artist}</span>
          </div>
          <div className="col-xs-3 text-right">
            <span>{keyDisplay}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 text-right">
        <small data-hook="time-elapsed">{timeElapsedDisplay} </small>
        <small> | </small>
        <small> {timeDurationDisplay}</small>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 waveform-container">
        <div className="relative">
          <div
            className="turntable-waveform-progress"
            data-hook="turntable-waveform-progress"
          />
          <img
            className="turntable-track-waveform-image"
            src={waveformUrl} alt="Track Waveform"
            data-hook="turntable-track-waveform"
          />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 controls">
        {/* TODO: examine and probably remove data-hooks */}
        <img
          src={Images.playButton()}
          onClick={play}
          data-hook="play-button"
          alt="Play Button"
        />
        <img src={Images.pauseButton()} data-hook="pause-button" alt="Pause Button" />
        {downloadable &&
          <img
            src={Images.downArrow()}
            data-hook="download-button"
            data-download-url={downloadUrl}
            className="track-button"
            alt="Download Track Button"
          />
        }
        {purchaseable &&
          <a
            href={purchaseUrl}
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
        {playable &&
          <audio id={`audio-for-turntable-${turntableId}`} data-hook="track-audio">
            <source src={audioUrl} />
          </audio>
        }
      </div>
    </div>
  </div>
);

TurntableTrack.propTypes    = TrackSchema.PropTypes.isRequired;
TurntableTrack.defaultProps = TrackSchema.Defaults;

export default TurntableTrack;
