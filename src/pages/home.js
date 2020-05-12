import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/banner"
import bannerData from "../data/banner.json"

import Features from "../components/features"
import featuresData from "../data/features.json"

import Clients from "../components/clients"
import clientsData from "../data/clients.json"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner data={bannerData} />
      <Features data={featuresData} />
      <Clients data={clientsData} />
    </Layout>
  )
}

export default HomePage
