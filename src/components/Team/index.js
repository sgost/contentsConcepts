import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  TeamSection,
  SectionHeading,
  TeamMembers,
  MemberInfo
} from './styles';

export const TeamMembersSection = ({
  title,
  teamMembers
}) => {
  return(
    <TeamSection id="team">
      <SectionHeading>
        <h2>{title}</h2>
      </SectionHeading>
      <TeamMembers>
        {
          teamMembers && teamMembers.map(member =>
            <MemberInfo key={member.id}>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <p>
                {member.description}
              </p>
            </MemberInfo>
          )
        }
      </TeamMembers>
    </TeamSection>
  );
};

const Team = props => {

  const[teamContent, setTeamContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "about/team.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            teamMembers {
              id
              name
              role
              description
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(data.file) {
      setTeamContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file && <TeamMembersSection title={teamContent.title} teamMembers={teamContent.teamMembers} />
      }
    </Fragment>
  )
}

export default Team
