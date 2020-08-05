import React from "react";
import PropTypes from "prop-types";

import { HomeBannerSection } from "../../components/Banner";

const HomeBannerPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  return (
    <HomeBannerSection
      title={data.title}
      content={data.content}
      typedWords={data.typedWords}
      services={data.services}
    />
  );

};

HomeBannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomeBannerPreview;
