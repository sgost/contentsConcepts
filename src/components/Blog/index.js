import React, { Fragment } from "react"
import { graphql } from "gatsby"
import {
  BlogContainer,
  AuthorInfo,
  BlogContent,
  TagsList
} from './styles';

const Blog = ({ data }) => {

  const content = data.markdownRemark;

  return (
    <Fragment>
      {
        content &&
        <BlogContainer>
          <AuthorInfo>
            <div className="author_image">
              <img src={content.frontmatter.author_image.childImageSharp.fluid.src} alt={content.author} />
            </div>
            <div className="author_info">
              <h4>{content.frontmatter.author}</h4>
              <span>{content.frontmatter.bio}</span>
              <span>{content.fields.readingTime.text} &middot; {content.frontmatter.date}</span>
            </div>
          </AuthorInfo>
          <BlogContent>
            <h2 className="blogTitle">{content.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
          </BlogContent>
          {
            content.frontmatter.tags &&
            <TagsList>
              Tagged with
              {
                content.frontmatter.tags.map((type, i, arr) => {
                  let divider = i<arr.length-1 && <>, </>;
                  return (
                    <span key={type}>{type}{divider}</span>
                  )
                })
              }
              {/* {
                content.frontmatter.tags.map(tag => <span>{tag}</span>)
              } */}
            </TagsList>
          }
        </BlogContainer>
      }
    </Fragment>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        author
        author_image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        bio
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
      html
    }
  }
`
