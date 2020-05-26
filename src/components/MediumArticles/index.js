import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { Row, Col } from 'antd'
import {
  MediumLinksContainer,
  SectionHeading,
  ArticlesList
} from './styles';

const MediumArticles = props => {

  const mediumPosts = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            id
            title
            virtuals {
              previewImage {
                imageId
              }
            }
            uniqueSlug
          }
        }
      }
    }
  `)

  return (
    <MediumLinksContainer>
      <SectionHeading>
        <h2>Articles</h2>
      </SectionHeading>
      <ArticlesList>
        <Row>
          {
            mediumPosts.allMediumPost.edges.map(edge =>
              <Col xs={24} sm={8} md={8} lg={8} xl={8} key={edge.node.id}>
                <a href={`https://medium.com/@kalaiselvan369/${edge.node.uniqueSlug}`} rel="noopener noreferrer" target="_blank">
                  <img src={`https://miro.medium.com/fit/c/700/210/${edge.node.virtuals.previewImage.imageId}`} alt={edge.node.title} />
                  <span>{edge.node.title}</span>
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
