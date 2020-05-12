import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
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
`;

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavLinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-right: 18px;
`;

export const NavLink = styled.li`
  a {
    display: inline-block;
    padding: 8px 18px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${palette.NAVLINK_COLOR};
  }
`;
