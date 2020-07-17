import { Link } from "gatsby"
import React from "react"
import { Button } from "antd"

import {
  NavBarContainer,
  NavLinkContainer,
  NavLink
} from './styles';

const NavigationMenu = props => {
  return (
    <NavBarContainer >
      <NavLinkContainer>
        <NavLink key="about">
          <Link to="/">About</Link>
        </NavLink>
        <NavLink key="services">
          <Link to="/services/manuscript_editing" activeClassName="activeLink">Services</Link>
        </NavLink>
        <NavLink key="blog">
          <Link to="/">Blog</Link>
        </NavLink>
        <NavLink key="pricing">
          <Link to="/">Pricing</Link>
        </NavLink>
        <NavLink key="contact">
          <Link to="/">Contact</Link>
        </NavLink>
      </NavLinkContainer>
      <Button type="primary">Get Quote</Button>
    </NavBarContainer>
  )
}

export default NavigationMenu
