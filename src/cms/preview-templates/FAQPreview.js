import React from "react";
import PropTypes from "prop-types";

import { FAQPreviewSection } from "../../components/FAQ";

const FAQPreview = ({ entry }) => {

  const data = entry.getIn(["data"]).toJS();

  return (
    <FAQPreviewSection
      title={data.title}
      questions={data.questions}
    />
  );

};

FAQPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default FAQPreview;
