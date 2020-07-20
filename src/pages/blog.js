import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"

const BlogPage = ({ data }) => {

  const blogList = data.allMarkdownRemark.edges;

  return (
    <Fragment>
      <SEO title="Blog" />
      <div className="blogListContainer">
        <h2>Blog</h2>
        {
          blogList && blogList.map(blogItem => {
            return (
              <div key={blogItem.node.id} className="blogListItem">
                <Link to={blogItem.node.fields.slug}>
                  <h3 className="blogHeading">{blogItem.node.frontmatter.title}</h3>
                  <p className="blogExcerpt">
                    {blogItem.node.frontmatter.excerpt}
                  </p>
                  <div className="blogInfo">
                    <img src={blogItem.node.frontmatter.author_image.childImageSharp.fluid.src} alt={blogItem.node.frontmatter.author} />
                    <span className="blogAuthor">{blogItem.node.frontmatter.author}</span>
                    <span>on {blogItem.node.frontmatter.date}</span>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </Fragment>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            author
            author_image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
