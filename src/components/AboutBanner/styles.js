import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const BannerSection = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
  overflow: hidden;
  .ant-row {
    flex-wrap: nowrap;
    .resSection {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 8% 0% 12% 0%;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
      .resSection {
        margin: 12% 0% 14% 0%;
      }
    }
  }
  .contentSection {
    margin: 0 auto;
    max-width: 600px;
    padding: 5% 0% 5% 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      max-width: 400px;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      max-width: unset;
      padding: 4% 6% 12% 6%;
      margin: 0;
    }
  }
`;

export const ContentContainer = styled.div`
  h2 {
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: ${palette.BUTTON_PRIMARY};
  }
  p {
    font-size: 16px;
    line-height: 32px;
    margin-top: 12px;
  }
  @media (max-width: 992px) {
    h2 {
      font-size: 30px;
      line-height: 40px;
    }
    p {
      font-size: 14px;
      line-height: 25px;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const OverlayContainer = styled.div`
  position: relative;
  z-index: 1;
  .topBg {
    width: 106px;
    height: 100px;
    background: #FFC1C1;
    position: absolute;
    right: -11%;
    top: -15%;
    z-index: 2;
  }
  .imageContainer {
    z-index: 3;
    position: relative;
  }
  .bottomBg {
    width: 337px;
    height: 314px;
    background: ${palette.ICON_BACKGROUND};
    position: absolute;
    left: -18%;
    bottom: -25%;
    z-index: 2;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .imageContainer {
      max-width: 370px;
    }
    .bottomBg {
      width: 275px;
      height: 215px;
      left: -12%;
      bottom: -15%;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .topBg {
      width: 80px;
      height: 80px;
      right: -12%;
      top: -16%;
    }
    .imageContainer {
      max-width: 300px;
    }
    .bottomBg {
      width: 250px;
      height: 192px;
      left: -14%;
      bottom: -20%;
    }
  }
  @media (max-width: 576px) {
    .topBg {
      width: 90px;
      height: 90px;
      right: -14%;
      top: -20%;
    }
    .imageContainer {
      max-width: 310px;
    }
    .bottomBg {
      width: 190px;
      height: 170px;
      left: -18%;
      bottom: -25%;
    }
  }
`;
