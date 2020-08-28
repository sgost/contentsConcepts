import React from "react";
import PropTypes from "prop-types";

import { QualityAssuranceSection } from "../../components/QualityAssurance";

const QualityAssurancePreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  return (
    <QualityAssuranceSection
      title={data.title}
      html={widgetFor('body')}
      preview={true}
    />
  );

};

QualityAssurancePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default QualityAssurancePreview;
