import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import { Notification } from "../Notification"
import OfferImage from '../../images/offer.svg'

import Header from "../Header"
import Footer from "../Footer"
import { GlobalStyle } from '../../styles/global-styles';

const Layout = props => {

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "ContentConceptsData"}, relativePath: {eq: "data/offers.json"}) {
        childDataJson {
          offer
        }
      }
    }
  `);

  const offerData = data.file.childDataJson;

  useEffect(() => {
    const fetchData = async () => {
      Notification({
        description: offerData.offer,
        image: OfferImage,
        linkText: "Check our other offers"
      });
    }
    fetchData()
  }, []);

  return (
    <>
      <GlobalStyle />
      <div id="notification-wrapper"></div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
