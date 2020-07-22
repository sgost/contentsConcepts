import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  TeamSection,
  SectionHeading,
  TeamMembers,
  MemberInfo
} from './styles';

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
        data.file &&
        <TeamSection>
          <SectionHeading>
            <h2>{teamContent.title}</h2>
          </SectionHeading>
          <TeamMembers>
            {
              teamContent.teamMembers && teamContent.teamMembers.map(member =>
                <MemberInfo>
                  <h3>{member.name}</h3>
                  <span>({member.role})</span>
                  <p>
                    {member.description}
                  </p>
                </MemberInfo>
              )
            }
          </TeamMembers>
        </TeamSection>
      }
    </Fragment>
  )
}

export default Team
