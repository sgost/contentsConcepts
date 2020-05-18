import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const BannerSection = styled.div`
  overflow: hidden;
  .ant-row {
    flex-wrap: nowrap;
    .resSection {
      @media only screen and (min-width: 320px) and (max-width: 768px) {
        display: none;
      }
    }
  }
  .contentSection {
    margin: 0 auto;
    max-width: 600px;
    padding-left: 50px;
    padding: 9% 0 9% 4%;
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      max-width: 400px;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      max-width: unset;
      padding: 12% 6% 12% 6%;
    }
  }
`;

export const ContentContainer = styled.div`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    text-align: center;
  }
`;

export const Content = styled.p`
  font-weight: normal;
  font-size: 22px;
  line-height: 40px;
  color: ${palette.PRIMARY_TXT_COLOR};
  span {
    color: ${palette.HIGHLIGHT_TEXT};
    font-weight: 600;
  }
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 576px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  li {
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      .ant-btn {
        padding: 12px 20px;
      }
      margin-right: 15px;
    }
    @media (max-width: 576px) {
      .ant-btn {
        width: 100%;
      }
      width: 100%;
      margin: 10px 0px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -25%;
  right: 0;
  z-index: 0;
`;
