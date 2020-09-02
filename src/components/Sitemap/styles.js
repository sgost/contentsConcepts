import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const SitemapSection = styled.div`
  background: ${palette.WHITE_COLOR};
  padding: 60px 20px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px 50px;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 30px 40px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media only screen and (max-width: 1200px) and (min-width: 992px) {
    max-width: 800px;
  }
  @media (min-width: 1500px) {
    max-width: 1100px;
  }
  h3 {
    padding: 8px 0px;
    border-bottom: 1px solid ${palette.LIGHT_GREY};
  }
  .sitemapContainer {
    margin: 40px 0px;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .sitemapList {
    display: flex;
    flex-direction: column;
    padding: 12px;
    h5 {
      color: ${palette.PRIMARY_TXT_COLOR};
      margin-bottom: 5px;
      a {
        color: ${palette.PRIMARY_TXT_COLOR};
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .linkItem {
      color: ${palette.PRIMARY_TXT_COLOR};
      margin: 2px 0px;
      &:hover {
        color: ${palette.PRIMARY_TXT_COLOR};
        text-decoration: underline;
      }
    }
  }
`;
