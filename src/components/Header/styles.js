import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 20;
  background: ${palette.WHITE_COLOR};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 100px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 0px 30px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 0px 80px;
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
    color: ${palette.BLACK_COLOR};
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      margin-right: 5px;
      object-fit: contain;
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
      font-size: 11px;
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
  @media (max-width: 992px) {
    margin: 0px 8px;
  }
  a {
    display: inline-block;
    padding: 24px 0px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${palette.NAVLINK_COLOR};
    position: relative;
    &:hover {
      color: ${palette.BUTTON_PRIMARY};
    }
  }
  .activeLink {
    color: ${palette.BUTTON_PRIMARY};
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${palette.BUTTON_PRIMARY};
      bottom: 0;
      left: 0;
    }
  }
  #mob-services-link {
    display: none;
  }
  #mob-service-popover {
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    .navPopover, #mob-service-popover {
      display: none !important;
    }
    #mob-services-link {
      display: inline-block !important;
    }
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

export const SitemapContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  @media (min-width: 1500px) {
    max-width: 1300px;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SitemapList = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 15px 30px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 20px;
  }
  @media (max-width: 576px) {
    margin: 15px;
    align-items: center;
  }
  h5 {
    color: ${palette.BUTTON_PRIMARY};
    margin-bottom: 8px;
    line-height: 25px;
    a:hover {
      text-decoration: underline;
    }
  }
  .linkItem {
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 2px 0px;
    font-family: Poppins,sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    &:hover {
      text-decoration: underline;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 0px 18px;
  }
`;
