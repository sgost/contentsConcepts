import React from "react";
import PropTypes from "prop-types";

import Pricing from "../../components/Pricing";

const PricingPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

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
