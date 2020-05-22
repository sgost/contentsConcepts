import React, { useState, useEffect, Fragment } from "react"

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Layout from "../components/Layout"
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

const HomePage = () => {

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const jsonUrl = 'https://mohanapriya1994.github.io/ContentConceptsData/data/';

  const[loading, setLoading] = useState(true);

  const[data, setData] = useState({
    banner: {},
    features: [],
    clients: {},
    services: {},
    specialization: {},
    testimonial: [],
    process: {},
    customers: {},
    contact: {}
  });

  useEffect(() => {
    const fetchData = async () => {
      const bannerData = await fetch(jsonUrl + 'banner.json').then(res => res.json());
      const featuresData = await fetch(jsonUrl + 'features.json').then(res => res.json());
      const clientsData = await fetch(jsonUrl + 'clients.json').then(res => res.json());
      const servicesData = await fetch(jsonUrl + 'services.json').then(res => res.json());
      const specializationData = await fetch(jsonUrl + 'specialization.json').then(res => res.json());
      const testimonialData = await fetch(jsonUrl + 'testimonial.json').then(res => res.json());
      const processData = await fetch(jsonUrl + 'process.json').then(res => res.json());
      const customersData = await fetch(jsonUrl + 'customers.json').then(res => res.json());
      const contactData = await fetch(jsonUrl + 'contact.json').then(res => res.json());

      setData({
        ...data,
        banner: bannerData,
        features: featuresData,
        clients: clientsData,
        services: servicesData,
        specialization: specializationData,
        testimonial: testimonialData,
        process: processData,
        customers: customersData,
        contact: contactData
      });
      setLoading(false);
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      { loading && <Spin indicator={antIcon} className="homeSpin" /> }
      { !loading &&
        <Layout>
          <SEO title="Home" />
          <Banner content={data.banner} />
          <Features content={data.features} />
          <Clients content={data.clients} />
          <Services content={data.services} />
          <Specialization content={data.specialization} />
          <Testimonial content={data.testimonial} />
          <Process content={data.process} />
          <Customers content={data.customers} />
          <Contact content={data.contact} />
        </Layout>
      }
    </Fragment>
  )
}

export default HomePage
