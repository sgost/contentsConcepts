import React from "react";
import PropTypes from "prop-types";

import OfferImage from '../../images/offer.svg';

const OffersPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  const offerContainer = {
    background: 'linear-gradient(178.57deg,#8D58D4 0%,#578DC3 100%)',
    padding: '10px 35px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  };

  const offerText = {
    display: 'flex',
    flexDirection: 'row',
  };

  return (
    <div style={offerContainer}>
      <div style={offerText}>
        <img src={OfferImage} alt="offerImage" style={{marginRight: '8px', width: '22px', height: '22px'}} />
        <p style={{color: '#fff'}}>{data.offer}</p>
      </div>
      <div>
        <a href={data.offerLink.link} style={{color: '#fff', textDecoration: 'underline'}}>{data.offerLink.title}</a>
      </div>
    </div>
  );

};

OffersPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default OffersPreview;
