import React from "react"
import { Button, Row, Col } from "antd"
import { graphql, useStaticQuery } from "gatsby"
import {
  ServicesSection,
  SectionHeading,
  ServiceListContainer
} from './styles';

const Services = props => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/services.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            services {
              id
              title
              description
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const servicesContent = data.file.childMarkdownRemark.frontmatter;

  return (
    <ServicesSection>
      <SectionHeading>
        <h2>{servicesContent.title}</h2>
      </SectionHeading>
      <ServiceListContainer>
        <Row type="flex" className="servicesList">
          {
            servicesContent.services && servicesContent.services.map(dataItem =>
              <Col xs={24} sm={10} md={8} lg={8} xl={7} className="serviceListItem" key={dataItem.id}>
                <div className="imageContainer">
                  <img src={dataItem.image.childImageSharp.fluid.src} alt="service" />
                </div>
                <h3>{dataItem.title}</h3>
                <p>{dataItem.description}</p>
                <Button type="primary">Get Quote</Button>
              </Col>
            )
          }
        </Row>
      </ServiceListContainer>
    </ServicesSection>
  )
}

export default Services
