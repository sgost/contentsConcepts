import { Link } from "gatsby"
import React, { useState } from "react"
import { Drawer } from "antd"
import { MenuFoldOutlined } from '@ant-design/icons';
import NavigationMenu from './navigationMenu';
import Logo from '../../images/logo.png';
import {
  HeaderContainer,
  LogoContainer,
  MenuIcon,
  ResNavMenu
} from './styles';

const Header = props => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
      <div className="navMenu">
        <NavigationMenu />
      </div>
      <ResNavMenu>
        <MenuIcon>
          <MenuFoldOutlined onClick={showDrawer} />
        </MenuIcon>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          className="drawerNavMenu"
        >
          <NavigationMenu onClick={onClose} />
        </Drawer>
      </ResNavMenu>
    </HeaderContainer>
  )
}

export default Header
