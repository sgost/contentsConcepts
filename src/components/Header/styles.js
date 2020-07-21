import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 100px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 16px 30px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 16px 80px;
  }
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
  }
  .navMenu {
    margin-left: auto;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const LogoContainer = styled.div`
  a {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      margin-right: 5px;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 30px;
    width: 100%;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    .ant-btn {
      margin: 5px 0px 20px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const NavLinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-right: 18px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const NavLink = styled.li`
  margin: 0px 18px;
  a {
    display: inline-block;
    padding: 24px 0px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${palette.NAVLINK_COLOR};
    position: relative;
    &:hover {
      color: #1976D2;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      padding: 8px 10px;
    }
  }
  .activeLink {
    color: #1976D2;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #1976D2;
      bottom: 0;
      left: 0;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    a {
      display: inline-block;
      padding: 10px 18px;
      text-align: center;
      &:hover {
        background-color: ${palette.PRIMARY_SECTION_BACKGROUND};
      }
    }
  }
`;

export const ResNavMenu = styled.div`

`;

export const MenuIcon = styled.div`
  display: none;
  position: absolute;
  right: 30px;
  top: 20px;
  right: 30px;
  font-size: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;
