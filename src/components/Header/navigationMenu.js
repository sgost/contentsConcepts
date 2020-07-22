import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Button } from "antd"

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

  return (
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
          <Link to="/pricing" activeClassName="activeLink" onClick={props.onClick}>Pricing</Link>
        </NavLink>
        <NavLink key="contact">
          <Link to="/" onClick={props.onClick}>Contact</Link>
        </NavLink>
      </NavLinkContainer>
      <Button type="primary">Get Quote</Button>
    </NavBarContainer>
  )
}

export default NavigationMenu
