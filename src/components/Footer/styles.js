import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const FooterSection = styled.div`
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  padding: 60px 20px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px 50px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
`;

export const SitemapContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
  margin: 0px 12px;
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
    color: ${palette.WHITE_COLOR};
    margin-bottom: 8px;
  }
  a {
    color: ${palette.PALE_BLUE};
    margin: 2px 0px;
    &:hover {
      color: ${palette.WHITE_COLOR};
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 0px 18px;
  }
`;
