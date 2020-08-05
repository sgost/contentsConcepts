import React from "react";
import PropTypes from "prop-types";

import { HomeFeaturesSection } from "../../components/Features";

const FeaturesPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  if(data.hasOwnProperty('features')) {
    if(data.features) {
      data.features.map(feature => {
        var getImage = getAsset(feature.image);
        feature.image = getImage.toString();
        return feature;
      });
    }
  }

  return (
    <HomeFeaturesSection
      title={data.title}
      features={data.features}
    />
  );

};

FeaturesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FeaturesPreview;
