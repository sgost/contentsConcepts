import React, { Fragment } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Pricing from "../components/Pricing"
import Customers from "../components/Customers"
import Contact from "../components/Contact"

const PricingPage = ({ data }) => {

  const pricingContent = data.file.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      <SEO title="Pricing" />
      <Pricing content={pricingContent} />
      <Customers />
      <Contact />
    </Fragment>
  )
}

export default PricingPage

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "pricing/index.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
          subHeading
          pricing {
            id
            title
            editingServices
            price {
              inr
              usd
            }
            themeColor
          }
          quality {
            title
            description
          }
        }
      }
    }
  }
`
