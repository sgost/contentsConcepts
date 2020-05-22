import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { Notification } from "../Notification"
import OfferImage from '../../images/offer.svg'

import Header from "../Header"
import Footer from "../Footer"

const Layout = props => {

  const jsonUrl = 'https://mohanapriya1994.github.io/ContentConceptsData/data/';

  const[footerContent, setFooterContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const offerData = await fetch(jsonUrl + 'offers.json').then(res => res.json());
      Notification({
        description: offerData.offer,
        image: OfferImage,
        linkText: "Check our other offers"
      });

      const footerData = await fetch(jsonUrl + 'footer.json').then(res => res.json());
      setFooterContent(footerData);
    }
    fetchData()
  }, []);

  return (
    <>
      <div id="notification-wrapper"></div>
      <Header />
      <main>{props.children}</main>
      <Footer content={footerContent} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
