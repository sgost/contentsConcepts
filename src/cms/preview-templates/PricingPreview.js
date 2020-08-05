import React from "react";
import PropTypes from "prop-types";

import Pricing from "../../components/Pricing";

const PricingPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  // if(data.hasOwnProperty('editingSample')) {
  //   if(data.editingSample.samples) {
  //     data.editingSample.samples.map(sample => {
  //       var getImage = getAsset(sample.image);
  //       sample.image = getImage.toString();
  //       return sample;
  //     });
  //   }
  // }
  // if(data.hasOwnProperty('editingHighlights')) {
  //   if(data.editingHighlights.highlights) {
  //     data.editingHighlights.highlights.map(highlight => {
  //       var getImage = getAsset(highlight.image);
  //       highlight.image = getImage.toString();
  //       return highlight;
  //     });
  //   }
  // }

  return (
    <Pricing
      content={data}
    />
  );

};

PricingPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PricingPreview;
