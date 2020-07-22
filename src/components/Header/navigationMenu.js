import { Link } from "gatsby"
import React, { useState, useEffect, Fragment } from "react"
import { Button, Modal } from "antd"
import GetQuote from "../GetQuote"
import {
  NavBarContainer,
  NavLinkContainer,
  NavLink
} from './styles';

const NavigationMenu = props => {

  const[url, setUrl] = useState('');

  useEffect(() => {
    if(typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  });

  const isPartiallyActive = () => {
    if(url) {
      return url.indexOf('/services/') >= 0 ? { className: "activeLink" } : null;
    }
  }

  //modal
  const[showModal, setShowModal] = useState(false);

  const handleCancel = e => {
    setShowModal(false);
  };

  const getQuote = e => {
    setShowModal(true);
    if(props.onClick) {
      props.onClick();
    }
  };

  useEffect(() => {
    if(showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <Fragment>
      <NavBarContainer >
        <NavLinkContainer>
          <NavLink key="about">
            <Link to="/" onClick={props.onClick}>About</Link>
          </NavLink>
          <NavLink key="services">
            <Link to="/services/manuscript_editing" getProps={isPartiallyActive} activeClassName="activeLink" onClick={props.onClick}>Services</Link>
          </NavLink>
          <NavLink key="blog">
            <Link to="/blog" partiallyActive={true} activeClassName="activeLink" onClick={props.onClick}>Blog</Link>
          </NavLink>
          <NavLink key="pricing">
            <Link to="/pricing/" activeClassName="activeLink" onClick={props.onClick}>Pricing</Link>
          </NavLink>
          <NavLink key="contact">
            <Link to="/" onClick={props.onClick}>Contact</Link>
          </NavLink>
        </NavLinkContainer>
        <Button type="primary" onClick={getQuote}>Get Quote</Button>
      </NavBarContainer>
      <Modal
        title="Get Quote"
        visible={showModal}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={handleCancel}
        getContainer={() => document.getElementById('___gatsby')}
      >
        <GetQuote onSubmit={handleCancel} />
      </Modal>
    </Fragment>
  )
}

export default NavigationMenu
