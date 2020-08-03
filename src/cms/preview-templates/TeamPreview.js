import React from "react";
import PropTypes from "prop-types";

import { TeamMembersSection } from "../../components/Team";

const TeamPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  return (
    <TeamMembersSection
      title={data.title}
      teamMembers={data.teamMembers}
    />
  );

};

TeamPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default TeamPreview;
