import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MenuSection from "../../components/EditingServices/menu.js";
import { FAQPreviewSection } from "../../components/FAQ";

const ServicePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

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
    <Fragment>
      <MenuSection
        content={data}
      />
      <FAQPreviewSection
        title={data.faq.title}
        questions={data.faq.questions}
      />
    </Fragment>
  );

};

ServicePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ServicePreview;
