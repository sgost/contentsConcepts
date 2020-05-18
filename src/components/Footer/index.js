import { Link } from "gatsby"
import React from "react"

import {
  FooterSection,
  SitemapContainer,
  SitemapList
} from './styles';

const Footer = props => {

  const content = props.content;

  return (
    <FooterSection>
      <SitemapContainer>
        {
          content && content.map(dataItem =>
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
