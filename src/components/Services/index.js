import React from "react"
import { Button, Row, Col } from "antd"

import {
  ServicesSection,
  SectionHeading,
  ServiceListContainer
} from './styles';

const Services = props => {

  const servicesContent = props.content;

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
                  <img src={require('../../images/' + dataItem.image)} alt="service" />
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
