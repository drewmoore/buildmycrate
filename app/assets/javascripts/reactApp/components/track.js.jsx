import React, { PropTypes } from 'react';
import Images               from '../helpers/images.js.es6';

const Track = ({
  title, user, bpm, keySignature, downloadUrl, purchaseUrl, streamable
}) => (
  <div className="row track">
    <div className="col-xs-3 col-lg-4">{title}</div>
    <div className="col-xs-3 col-lg-4">{user.username}</div>
    <div className="col-xs-3 col-lg-1">{bpm}</div>
    <div className="col-xs-3 col-lg-1">{keySignature}</div>
    <div className="col-xs-3 col-lg-2 text-right">
      {downloadUrl && downloadUrl.length &&
        <img
          src={Images.downArrow()}
          className="track-button"
          alt="Download Track Button"
          data-hook="download-button"
          data-download-url={downloadUrl}
        />
      }
      {purchaseUrl && purchaseUrl.length &&
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
          <img
            src={Images.turntableLeft()}
            className="track-button"
            alt="Button to load left turntable"
            data-hook="turntable-loader"
          />
          <img
            src={Images.turntableRight()}
            className="track-button"
            alt="Button to load right turntable"
            data-hook="turntable-loader"
          />
        </span>
      }
    </div>
  </div>
);

Track.propTypes = {
  title:        PropTypes.string,
  bpm:          PropTypes.number,
  user:         PropTypes.shape({ username: PropTypes.string }),
  keySignature: PropTypes.string,
  downloadUrl:  PropTypes.string,
  purchaseUrl:  PropTypes.string,
  streamable:   PropTypes.bool
};

Track.defaultProps = {
  title:        '',
  bpm:          null,
  user:         { username: '' },
  keySignature: '',
  downloadUrl:  '',
  purchaseUrl:  '',
  streamable:   ''
};

export default Track;
