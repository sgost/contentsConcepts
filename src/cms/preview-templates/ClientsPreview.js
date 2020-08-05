import React from "react";
import PropTypes from "prop-types";

import { HomeClientSection } from "../../components/Clients";

const ClientsPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  if(data.hasOwnProperty('clients')) {
    if(data.clients) {
      data.clients.map(client => {
        var getImage = getAsset(client.image);
        client.image = getImage.toString();
        return client;
      });
    }
  }

  return (
    <HomeClientSection
      title={data.title}
      description={data.description}
      clients={data.clients}
    />
  );

};

ClientsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ClientsPreview;
