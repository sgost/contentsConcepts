import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  ClientsSection,
  SectionContent,
  ClientsList
} from './styles';

export const HomeClientSection = ({
  title,
  description,
  clients
}) => {
  return (
    <ClientsSection>
      <SectionContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </SectionContent>
      <ClientsList>
        {
          clients && clients.map(dataItem =>
            dataItem.image !== null &&
            <li key={dataItem.id}>
              {
                dataItem.image !== null && dataItem.image.childImageSharp ? <img src={dataItem.image.childImageSharp.fluid.src} alt="clients" /> : <img src={dataItem.image} alt={dataItem.title} />
              }
            </li>
          )
        }
      </ClientsList>
    </ClientsSection>
  );
};

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
        <HomeClientSection
          title={clientsData.title}
          description={clientsData.description}
          clients={clientsData.clients}
        />
      }
    </Fragment>
  )
}

export default Clients
