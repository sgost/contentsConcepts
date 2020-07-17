import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  ClientsSection,
  SectionContent,
  ClientsList
} from './styles';

const Clients = () => {

  const[clientsData, setClientsData] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/clients.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            clients {
              id
              title
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

  useEffect(() => {
    if(data.file) {
      setClientsData(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <ClientsSection>
          <SectionContent>
            <h2>{clientsData.title}</h2>
            <p>{clientsData.description}</p>
          </SectionContent>
          <ClientsList>
            {
              clientsData.clients && clientsData.clients.map(dataItem =>
                <li key={dataItem.id}>
                  <img src={dataItem.image.childImageSharp.fluid.src} alt="clients" />
                </li>
              )
            }
          </ClientsList>
        </ClientsSection>
      }
    </Fragment>
  )
}

export default Clients
