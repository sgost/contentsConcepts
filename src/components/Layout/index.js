import React, { useEffect, useState } from "react"
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
      file(relativePath: {eq: "home/offers.md"}) {
        childMarkdownRemark {
          frontmatter {
            offer
            offerLink {
              title
              link
            }
          }
        }
      }
    }
  `);

  const offerData = data.file.childMarkdownRemark.frontmatter;

  useEffect(() => {
    if(offerData) {
      Notification({
        description: offerData.offer,
        image: OfferImage,
        linkText: offerData.offerLink.title,
        link: offerData.offerLink.link
      });
    }
  }, [offerData]);

  const[showFooter, setShowFooter] = useState(true);
  useEffect(() => {
    if(typeof window !== 'undefined') {
      if(window.location.pathname === '/sitemap/') {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }
    }
  });

  return (
    <>
      <GlobalStyle />
      <div id="notification-wrapper"></div>
      <Header />
      <main>{props.children}</main>
      {
        showFooter &&  <Footer />
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
