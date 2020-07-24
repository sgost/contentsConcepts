import React, { Fragment, useState, useEffect } from "react"
import { Row, Col } from "antd"
import { graphql, useStaticQuery } from "gatsby"
import {
  SpecializationSection,
  ContentSection,
  SpecialityListWrapper,
  SpecialityList
} from './styles';

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
        <SpecializationSection>
          <ContentSection>
            <h2 dangerouslySetInnerHTML={{__html: content.title}} />
            <p>{content.description}</p>
          </ContentSection>
          <Row className="specialitiesContent">
            <Col xs={24} sm={24} md={3} lg={3} xl={4} className="badgeWrapper">
              {
                content.badge &&
                <img src={content.badge.publicURL} alt="Quality Badge" />
              }
            </Col>
            <Col xs={24} sm={24} md={21} lg={21} xl={20}>
              <SpecialityListWrapper>
                {
                  content.specialities && content.specialities.map(dataItem =>
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
      }
    </Fragment>
  )
}

export default Specialization
