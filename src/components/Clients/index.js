import React from "react"

import {
  ClientsSection,
  SectionContent,
  ClientsList
} from './styles';

const Clients = props => {

  const clientsData = props.data;

  return (
    <ClientsSection>
      <SectionContent>
        <h2>{clientsData.title}</h2>
        <p class="contentDescription">{clientsData.description}</p>
      </SectionContent>
      <ClientsList>
        {
          clientsData.clients && clientsData.clients.map(dataItem =>
            <li key={dataItem.id}>
              <img src={require('../../images/' + dataItem.image)} alt="clients" />
            </li>
          )
        }
      </ClientsList>
    </ClientsSection>
  )
}

export default Clients
