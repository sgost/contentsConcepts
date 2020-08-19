import React, { Fragment } from "react"

import SEO from "../components/seo"
import Banner from "../components/Banner"
import Features from "../components/Features"
import Clients from "../components/Clients"
import Services from "../components/Services"
import Specialization from "../components/Specialization"
import Testimonial from "../components/Testimonial"
import Process from "../components/Process"
import Customers from "../components/Customers"
import Contact from "../components/Contact"
import MediumArticles from "../components/MediumArticles"
import FAQ from "../components/FAQ"

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title="Home" />
      <Banner />
      <Features />
      <Clients />
      <Services />
      <Specialization />
      <Testimonial />
      <Process />
      <Customers />
      <Contact />
      <MediumArticles />
      <FAQ path="home" />
    </Fragment>
  )
}

export default IndexPage
