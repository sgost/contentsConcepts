import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import AboutBanner from "../components/AboutBanner"
import Team from "../components/Team"
import Testimonial from "../components/Testimonial"
import Contact from "../components/Contact"
import FAQ from "../components/FAQ"

const AboutPage = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "about/seo.md"}) {
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
      <AboutBanner />
      <Team />
      <Testimonial />
      <Contact />
      <FAQ />
    </Fragment>
  )
}

export default AboutPage
