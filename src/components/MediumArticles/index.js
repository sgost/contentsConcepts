import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { Row, Col } from 'antd'
import {
  MediumLinksContainer,
  SectionHeading,
  ArticlesList
} from './styles';

const MediumArticles = ({ data }) => {

  const mediumPosts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)\\/.*\\\\.md$/"}}, sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              previewImage {
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

  return (
    <MediumLinksContainer>
      <SectionHeading>
        <h2>Articles</h2>
      </SectionHeading>
      <ArticlesList>
        <Row>
          {
            mediumPosts.allMarkdownRemark.edges.map(edge =>
              <Col xs={24} sm={8} md={8} lg={8} xl={8} key={edge.node.id}>
                <a href={edge.node.fields.slug}>
                  <img src={edge.node.frontmatter.previewImage.childImageSharp.fluid.src} alt={edge.node.frontmatter.title} />
                  <span>{edge.node.frontmatter.title}</span>
                </a>
              </Col>
            )
          }
        </Row>
      </ArticlesList>
    </MediumLinksContainer>
  )
}

export default MediumArticles
