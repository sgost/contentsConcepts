import React, { Fragment } from "react"

import SEO from "../components/seo"
import AboutBanner from "../components/AboutBanner"
import Team from "../components/Team"
import Testimonial from "../components/Testimonial"
import Contact from "../components/Contact"

const ContactPage = () => {
  return (
    <Fragment>
      <SEO title="About" />
      <AboutBanner />
      <Team />
      <Testimonial />
      <Contact />
    </Fragment>
  )
}

export default ContactPage
