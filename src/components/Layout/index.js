import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { Notification } from "../notification"
import offerData from "../../data/offers.json"
import OfferImage from '../../images/offer.svg'

import Header from "../header"

const Layout = props => {

  useEffect(() => {
    Notification({
      description: offerData.offer,
      image: OfferImage,
      linkText: "Check our other offers"
    });
  }, []);

  return (
    <>
      <div id="notification-wrapper"></div>
      <Header />
      <main>{props.children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
