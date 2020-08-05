import React from "react";
import PropTypes from "prop-types";

import { ContactPreviewSection } from "../../components/Contact";

const ContactPreview = ({ entry }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  return (
    <ContactPreviewSection
      title={data.title}
      call={data.call}
      email={data.email}
      categories={data.categories}
    />
  );

};

ContactPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default ContactPreview;
