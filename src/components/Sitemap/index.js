import { graphql, useStaticQuery, Link } from "gatsby"
import React, { Fragment } from "react"
import { Row, Col } from "antd";
import {
  SitemapSection,
  ContentContainer,
} from './styles';

export const SitemapPreviewSection = ({
  sitemapList
}) => {
  return (
    <SitemapSection>
      <ContentContainer>
        <h3>ContentConcepts Site Map</h3>
        <Row type="flex" className="sitemapContainer">
          {
            sitemapList && sitemapList.map(dataItem =>
              <Col xs={24} sm={12} md={8} lg={8} xl={8} key={dataItem.id} className="sitemapList">
                {
                  dataItem.link ?
                    <h5><Link to={dataItem.link} key={dataItem.id}>{dataItem.title}</Link></h5>
                  : <h5>{dataItem.title}</h5>
                }
                {
                  dataItem.sitemap && dataItem.sitemap.map(sitemap =>
                    <Link to={sitemap.link} key={sitemap.id} className="linkItem">{sitemap.title}</Link>
                  )
                }
              </Col>
            )
          }
        </Row>
      </ContentContainer>
    </SitemapSection>
  );
};

const Sitemap = props => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/footer.md"}) {
        childMarkdownRemark {
          frontmatter {
            sitemapList {
              id
              title
              link
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
        content && <SitemapPreviewSection title={content.title} sitemapList={content.sitemapList} />
      }
    </Fragment>
  )
}

export default Sitemap
