import React          from 'react';
import TrackSchema    from '../../../schemas/track.js.es6';
import Images         from '../../../helpers/images.js.es6';
import Spinner        from '../../spinner.js.jsx';

const TurntablesTrackControls = ({
  purchaseUrl, isFetching, purchaseable, downloadable, playable, play, pause, download
}) => (
  <div className="row">
    <div className="col-xs-10 controls">
      {playable &&
        <span>
          <img
            src={Images.playButton()}
            onClick={play}
            className="track-button clickable"
            alt="Play Button"
          />
          <img
            src={Images.pauseButton()}
            onClick={pause}
            className="track-button clickable"
            alt="Pause Button"
          />
        </span>
      }
      {downloadable &&
        <img
          src={Images.downArrow()}
          onClick={download}
          className="track-button clickable"
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
            className="track-button clickable"
            alt="Purchase Track Button"
          />
        </a>
      }
    </div>
    <div className="col-xs-2 controls text-center">
      <Spinner isSpinning={isFetching} />
    </div>
  </div>
);

TurntablesTrackControls.propTypes    = TrackSchema.PropTypes.isRequired;
TurntablesTrackControls.defaultProps = TrackSchema.Defaults;

export default TurntablesTrackControls;
