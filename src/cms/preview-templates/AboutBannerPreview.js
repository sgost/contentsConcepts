import React from "react";
import PropTypes from "prop-types";

import { AboutBannerSection } from "../../components/AboutBanner";

const AboutBannerPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  return (
    <AboutBannerSection
      title={data.title}
      html={widgetFor('body')}
      preview={true}
    />
  );

};

AboutBannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AboutBannerPreview;
