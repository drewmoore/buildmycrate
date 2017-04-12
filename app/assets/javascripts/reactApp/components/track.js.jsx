import React                  from 'react';
import TrackSchema            from '../schemas/track.js.es6';
import TurntableIconContainer from '../containers/turntableIcon.js.jsx';
import Images                 from '../helpers/images.js.es6';

const Track = ({
  id, title, user, bpm, keySignature, downloadUrl, purchaseUrl, streamUrl,
  downloadable, purchaseable, streamable, turntables
}) => (
  <div className="row track">
    <div className="col-xs-3 col-lg-4">{title}</div>
    <div className="col-xs-3 col-lg-4">{user.username}</div>
    <div className="col-xs-3 col-lg-1">{bpm}</div>
    <div className="col-xs-3 col-lg-1">{keySignature}</div>
    <div className="col-xs-3 col-lg-2 text-right">
      {downloadable &&
        <img
          src={Images.downArrow()}
          className="track-button"
          alt="Download Track Button"
          data-hook="download-button"
          data-download-url={downloadUrl}
        />
      }
      {purchaseable &&
        <a href={purchaseUrl} target="_blank" className="purchase-link" rel="noopener noreferrer">
          <img
            src={Images.dollarSign()}
            className="track-button"
            alt="Purchase Track Button"
          />
        </a>
      }
      {streamable &&
        <span>
          {turntables.map(turntable =>
            <TurntableIconContainer
              key={turntable.id}
              {...turntable}
              trackId={id}
              trackStreamUrl={streamUrl}
            />
          )}
        </span>
      }
    </div>
  </div>
);

Track.propTypes    = TrackSchema.PropTypes.isRequired;
Track.defaultProps = TrackSchema.Defaults;

export default Track;
