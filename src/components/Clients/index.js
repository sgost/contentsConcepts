import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  ClientsSection,
  SectionContent,
  ClientsList
} from './styles';

const Clients = () => {

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "ContentConceptsData"}, relativePath: {eq: "data/clients.json"}) {
        childDataJson {
          title
          description
          clients {
            id
            title
            image
          }
        }
      }
    }
  `);

  const clientsData = data.file.childDataJson;

  return (
    <ClientsSection>
      <SectionContent>
        <h2>{clientsData.title}</h2>
        <p>{clientsData.description}</p>
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
