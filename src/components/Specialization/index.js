import React, { Fragment, useState, useEffect } from "react"
import { Row, Col } from "antd"
import { graphql, useStaticQuery } from "gatsby"
import {
  SpecializationSection,
  ContentSection,
  SpecialityListWrapper,
  SpecialityList
} from './styles';

export const HomeSpecializationSection = ({
  title,
  description,
  badge,
  specialities
}) => {
  return (
    <SpecializationSection>
      <ContentSection>
        <h2 dangerouslySetInnerHTML={{__html: title}} />
        <p>{description}</p>
      </ContentSection>
      <Row className="specialitiesContent">
        <Col xs={24} sm={24} md={3} lg={3} xl={4} className="badgeWrapper">
          {
            badge && badge.publicURL ? <img src={badge.publicURL} alt="Quality Badge" /> : <img src={badge} alt="Quality Badge" />
          }
        </Col>
        <Col xs={24} sm={24} md={21} lg={21} xl={20}>
          <SpecialityListWrapper>
            {
              specialities && specialities.map(dataItem =>
                <SpecialityList key={dataItem.id} theme={dataItem.themeColor}>
                  <h3>{dataItem.title}</h3>
                  <p className="description">{dataItem.description}</p>
                </SpecialityList>
              )
            }
          </SpecialityListWrapper>
        </Col>
      </Row>
    </SpecializationSection>
  );
};

const Specialization = props => {

  const[content, setContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/specialization.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            badge {
              publicURL
            }
            specialities {
              id
              title
              description
              themeColor
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(data.file) {
      setContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <HomeSpecializationSection
          title={content.title}
          description={content.description}
          badge={content.badge}
          specialities={content.specialities}
        />
      }
    </Fragment>
  )
}

export default Specialization
