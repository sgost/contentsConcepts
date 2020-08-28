import React from "react";
import PropTypes from "prop-types";

import { CustomersPreviewSection } from "../../components/Customers";

const CustomersPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('customers')) {
    if(data.customers) {
      data.customers.map(customer => {
        var getImage = getAsset(customer.image);
        customer.image = getImage.toString();
        return customer;
      });
    }
  }

  return (
    <CustomersPreviewSection
      title={data.title}
      customers={data.customers}
    />
  );

};

CustomersPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default CustomersPreview;
