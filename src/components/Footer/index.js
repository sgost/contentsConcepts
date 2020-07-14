import { Link } from "gatsby"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FooterSection,
  SitemapContainer,
  SitemapList
} from './styles';

const Footer = props => {

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "ContentConceptsData"}, relativePath: {eq: "data/footer.json"}) {
        childDataJson {
          sitemaps {
            id
            title
            sitemap {
              id
              link
              title
            }
          }
        }
      }
    }
  `);

  const content = data.file.childDataJson;

  return (
    <FooterSection>
      <SitemapContainer>
        {
          content.sitemaps && content.sitemaps.map(dataItem =>
            <SitemapList key={dataItem.id}>
              <h5>{dataItem.title}</h5>
              {
                dataItem.sitemap && dataItem.sitemap.map(sitemap =>
                  <Link to={sitemap.link} key={sitemap.id}>{sitemap.title}</Link>
                )
              }
            </SitemapList>
          )
        }
      </SitemapContainer>
    </FooterSection>
  )
}

export default Footer
