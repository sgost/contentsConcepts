import React from "react"
import { Button } from "antd"

import {
  ServicesSection,
  SectionHeading,
  ServicesList,
  ServiceListItem
} from './styles';

const Services = props => {

  const servicesContent = props.content;

  return (
    <ServicesSection>
      <SectionHeading>
        <h2>{servicesContent.title}</h2>
      </SectionHeading>
      <ServicesList>
        {
          servicesContent.services && servicesContent.services.map(dataItem =>
            <ServiceListItem key={dataItem.id}>
              <div className="imageContainer">
                <img src={require('../../images/' + dataItem.image)} alt="service" />
              </div>
              <h3>{dataItem.title}</h3>
              <p>{dataItem.description}</p>
              <Button type="primary">Get Quote</Button>
            </ServiceListItem>
          )
        }
      </ServicesList>
    </ServicesSection>
  )
}

export default Services
