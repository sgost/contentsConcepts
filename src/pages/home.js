import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Banner from "../components/Banner"
import bannerData from "../data/banner.json"

import Features from "../components/Features"
import featuresData from "../data/features.json"

import Clients from "../components/Clients"
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
