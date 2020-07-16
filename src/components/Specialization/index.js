import React from "react"
import { Row, Col } from "antd"
import { graphql, useStaticQuery } from "gatsby"
import {
  SpecializationSection,
  ContentSection,
  SpecialityListWrapper,
  SpecialityList
} from './styles';

const Specialization = props => {

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "ContentConceptsData"}, relativePath: {eq: "home/specialization.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            badge
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

  const content = data.file.childMarkdownRemark.frontmatter;

  return (
    <SpecializationSection>
      <ContentSection>
        <h2 dangerouslySetInnerHTML={{__html: content.title}} />
        <p>{content.description}</p>
      </ContentSection>
      <Row className="specialitiesContent">
        <Col xs={24} sm={24} md={3} lg={3} xl={4} className="badgeWrapper">
          <img src={require('../../images/' + content.badge)} alt="Quality Badge" />
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
  )
}

export default Specialization
