import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Contact from "../components/Contact"
import FAQ from "../components/FAQ"

const ContactPage = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "seoContact.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            keywords
          }
        }
      }
    }
  `);

  const seoData = data.file.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <Contact />
      <FAQ />
    </Fragment>
  )
}

export default ContactPage
