import React, { Fragment } from "react"

import SEO from "../components/seo"
import Contact from "../components/Contact"
import FAQ from "../components/FAQ"

const ContactPage = () => {
  return (
    <Fragment>
      <SEO title="Contact" />
      <Contact />
      <FAQ />
    </Fragment>
  )
}

export default ContactPage
