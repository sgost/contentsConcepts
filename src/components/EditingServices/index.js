import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import MenuSection from './menu';
import Process from "../Process"
import Customers from "../Customers"
import Contact from "../Contact"

const EditingServices = ({ data }) => {
  return (
    <Fragment>
      <SEO title="Services" />
      <MenuSection content={data.markdownRemark} />
      <Process />
      <Customers />
      <Contact />
    </Fragment>
  )
}

export default EditingServices

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        highlight
        editedTypes {
          title
          types
        }
        features {
          id
          title
        }
        editingLevels {
          title
          subHeading
          levelTypes {
            title
            themeColor
          }
          levels {
            id
            title
            copy
            substantive
            developmental
          }
        }
        editingSample {
          title
          samples {
            id
            title
            description
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
        editingHighlights {
          title
          highlights {
            id
            title
            description
            image {
              publicURL
            }
          }
        }
        key
        parentType
      }
    }
  }
`
