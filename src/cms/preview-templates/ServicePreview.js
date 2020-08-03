import React from "react";
import PropTypes from "prop-types";

import MenuSection from "../../components/EditingServices/menu.js";

const ServicePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data, data.hasOwnProperty('editingSample'));

  if(data.hasOwnProperty('editingSample')) {
    if(data.editingSample.samples) {
      data.editingSample.samples.map(sample => {
        var getImage = getAsset(sample.image);
        sample.image = getImage.toString();
        return sample;
      });
    }
  }
  if(data.hasOwnProperty('editingHighlights')) {
    if(data.editingHighlights.highlights) {
      data.editingHighlights.highlights.map(highlight => {
        var getImage = getAsset(highlight.image);
        highlight.image = getImage.toString();
        return highlight;
      });
    }
  }

  return (
    <MenuSection
      content={data}
    />
  );

};

ServicePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ServicePreview;
