import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  TeamSection,
  SectionHeading,
  TeamMembers,
  MemberInfo,
  CircleImage
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
              <div className="infoSection">
                <CircleImage theme={member.themeColor}>
                  {
                    member.image.childImageSharp ? <img src={member.image.childImageSharp.fluid.src} alt={member.name} /> : <img src={member.image} alt={member.name} />
                  }
                </CircleImage>
                <div className="memberDetails">
                  <h3>{member.name}</h3>
                  <span className="role">{member.role}</span>
                </div>
              </div>
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
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              themeColor
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
