import React from "react";
import PropTypes from "prop-types";

import { TestimonialPreviewSection } from "../../components/Testimonial";

const TestimonialPreview = ({ entry }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  return (
    <TestimonialPreviewSection
      title={data.title}
      testimonials={data.testimonials}
    />
  );

};

TestimonialPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default TestimonialPreview;
