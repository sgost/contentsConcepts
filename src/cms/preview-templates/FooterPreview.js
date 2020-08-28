import React from "react";
import PropTypes from "prop-types";

import { FooterPreviewSection } from "../../components/Footer";

const FooterPreview = ({ entry }) => {

  const data = entry.getIn(["data"]).toJS();

  return (
    <FooterPreviewSection
      title={data.title}
      sitemapList={data.sitemapList}
    />
  );

};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default FooterPreview;
