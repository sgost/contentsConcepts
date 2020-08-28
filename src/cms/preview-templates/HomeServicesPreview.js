import React from "react";
import PropTypes from "prop-types";

import { HomeServicesSection } from "../../components/Services";

const HomeServicesPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('services')) {
    if(data.services) {
      data.services.map(service => {
        var getImage = getAsset(service.image);
        service.image = getImage.toString();
        return service;
      });
    }
  }

  return (
    <HomeServicesSection
      title={data.title}
      services={data.services}
    />
  );

};

HomeServicesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomeServicesPreview;
