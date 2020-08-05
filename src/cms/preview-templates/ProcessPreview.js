import React from "react";
import PropTypes from "prop-types";

import { ProcessPreviewSection } from "../../components/Process";

const ProcessPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  return (
    <ProcessPreviewSection
      title={data.title}
      process={data.process}
    />
  );

};

ProcessPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ProcessPreview;
