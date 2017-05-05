import React                   from 'react';
import TrackSchema             from '../../schemas/track.js.es6';
import TurntablesIconContainer from '../../containers/turntables/Icon.js.es6';
import Images                  from '../../helpers/images.js.es6';

const TracksListItem = ({
  id, title, user, bpm, keySignature, purchaseUrl, streamUrl,
  downloadable, purchaseable, streamable, turntables, download
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
          onClick={download}
          className="track-button"
          alt="Download Track Button"
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
            <TurntablesIconContainer
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

TracksListItem.propTypes    = TrackSchema.PropTypes.isRequired;
TracksListItem.defaultProps = TrackSchema.Defaults;

export default TracksListItem;
