import React, { Fragment } from "react"
import { graphql } from "gatsby"
import {
  BlogContainer,
  AuthorInfo,
  BlogContent,
  TagsList
} from './styles';

export const BlogPost = ({
  fields,
  author_image,
  author,
  bio,
  date,
  title,
  html,
  tags,
  preview
}) => {

  // const content = data.markdownRemark;
  console.log(preview);

  return (
    <Fragment>
      <BlogContainer>
        <AuthorInfo>
          <div className="author_image">
            <img src={author_image} alt={author} />
          </div>
          <div className="author_info">
            <h4>{author}</h4>
            <span>{bio}</span>
            <div>
              {
                fields && <span>{fields.readingTime.text} &middot; </span>
              }
              <span>{date}</span>
            </div>
          </div>
        </AuthorInfo>
        <BlogContent>
          <h2 className="blogTitle">{title}</h2>
          {
            preview ? <p>{html}</p> : <div dangerouslySetInnerHTML={{ __html: html }} />
          }
        </BlogContent>
        {
          tags &&
          <TagsList>
            Tagged with
            {
              tags.map((type, i, arr) => {
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
    </Fragment>
  )
}

const Blog = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post);
  return (
      <BlogPost
        fields={post.fields}
        author_image={post.frontmatter.author_image.childImageSharp.fluid.src}
        author={post.frontmatter.author}
        bio={post.frontmatter.bio}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        html={post.html}
        tags={post.frontmatter.tags}
        preview={false}
      />
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
