import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Banner from "../components/Banner"
import bannerContent from "../data/banner.json"

import Features from "../components/Features"
import featuresContent from "../data/features.json"

import Clients from "../components/Clients"
import clientsContent from "../data/clients.json"

import Services from "../components/Services"
import servicesContent from "../data/services.json"

import Specialization from "../components/Specialization"
import specializationContent from "../data/specialization.json"

import Testimonial from "../components/Testimonial"
import testimonialContent from "../data/testimonial.json"

import Process from "../components/Process"
import processContent from "../data/process.json"

import Customers from "../components/Customers"
import customersContent from "../data/customers.json"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner content={bannerContent} />
      <Features content={featuresContent} />
      <Clients content={clientsContent} />
      <Services content={servicesContent} />
      <Specialization content={specializationContent} />
      <Testimonial content={testimonialContent} />
      <Process content={processContent} />
      <Customers content={customersContent} />
    </Layout>
  )
}

export default HomePage
