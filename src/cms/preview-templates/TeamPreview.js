import React from "react";
import PropTypes from "prop-types";

import { TeamMembersSection } from "../../components/Team";

const TeamPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('teamMembers')) {
    if(data.teamMembers) {
      data.teamMembers.map(member => {
        var getImage = getAsset(member.image);
        member.image = getImage.toString();
        return member;
      });
    }
  }

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
