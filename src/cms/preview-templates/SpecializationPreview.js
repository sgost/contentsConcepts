import React from "react";
import PropTypes from "prop-types";

import { HomeSpecializationSection } from "../../components/Specialization";

const SpecializationPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.badge) {
    var getImage = getAsset(data.badge);
    var badge = getImage.toString();
  }

  if(data.hasOwnProperty('specialities')) {
    if(data.specialities) {
      data.specialities.map(item => {
        var getImage = getAsset(item.image);
        item.image = getImage.toString();
        return item;
      });
    }
  }

  return (
    <HomeSpecializationSection
      title={data.title}
      description={data.description}
      badge={badge}
      specialities={data.specialities}
    />
  );

};

SpecializationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default SpecializationPreview;
