import { Link } from "gatsby"
import React from "react"
import { Button } from "antd"

import Logo from '../../images/logo.png';
import {
  HeaderContainer,
  LogoContainer,
  NavBarContainer,
  NavLinkContainer,
  NavLink
} from './styles';

const Header = props => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <h1>
          <Link to="/">
            <img src={Logo} alt="logo" />
            ContentConcepts
          </Link>
        </h1>
      </LogoContainer>
      <NavBarContainer>
        <NavLinkContainer>
          <NavLink>
            <Link to="/">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/">Services</Link>
          </NavLink>
          <NavLink>
            <Link to="/">Blog</Link>
          </NavLink>
          <NavLink>
            <Link to="/">Pricing</Link>
          </NavLink>
          <NavLink>
            <Link to="/">Contact</Link>
          </NavLink>
        </NavLinkContainer>
        <Button type="primary">Get Quote</Button>
      </NavBarContainer>
    </HeaderContainer>
  )
}

export default Header
