import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const ServicesSection = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
  padding: 60px 80px;
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

export const SectionHeading = styled.div`
  padding: 20px 0px;
  text-align: center;
`;

export const ServiceListContainer = styled.div`
  .servicesList {
    justify-content: space-between;
    padding-bottom: 40px;
    max-width: 1100px;
    margin: 0 auto;
    @media (min-width: 1500px) {
      max-width: 1300px;
    }
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      justify-content: center;
    }
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
    }
    .serviceListItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 20px;
      position: relative;
      .ant-btn {
        position: absolute;
        bottom: 0;
        a {
          display: inline-block;
        }
      }
      h3 {
        margin: 25px 0px 15px;
        text-align: center;
      }
      p {
        text-align: center;
        margin-bottom: 40px;
      }
      @media only screen and (min-width: 992px) and (max-width: 1200px) {
        padding: 20px;
      }
      @media only screen and (min-width: 768px) and (max-width: 992px) {
        padding: 18px;
      }
      @media only screen and (min-width: 576px) and (max-width: 768px) {
        padding: 15px 20px 10px;
        margin-bottom: 15px;
      }
      @media (max-width: 576px) {
        padding: 38px 15px;
        margin-bottom: 30px;
        &:first-child {
          padding: 15px 15px 38px;
        }
        &:last-child {
          margin-bottom: 15px;
        }
        h3 {
          margin: 12px 0px 8px;
        }
        p {
          margin-bottom: 15px;
        }
      }
    }
  }
`;
