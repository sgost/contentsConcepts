import { graphql, useStaticQuery, Link } from "gatsby"
import React, { Fragment } from "react"
import {
  FooterSection,
  SitemapContainer,
  SitemapList
} from './styles';

export const FooterPreviewSection = ({
  title,
  sitemapList
}) => {
  return (
    <FooterSection>
      <SitemapContainer>
        {
          sitemapList && sitemapList.map(dataItem =>
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
  );
};

const Footer = props => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/footer.md"}) {
        childMarkdownRemark {
          frontmatter {
            sitemapList {
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
    }
  `);

  const content = data.file.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      {
        content && <FooterPreviewSection title={content.title} sitemapList={content.sitemapList} />
      }
    </Fragment>
  )
}

export default Footer
