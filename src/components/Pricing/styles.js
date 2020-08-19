import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const LevelsSection = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
  .editingLevelsList {
    max-width: 950px;
    margin: 50px auto;
    justify-content: center;
    @media (min-width: 1500px) {
      max-width: 1100px;
    }
    @media (max-width: 768px) {
      max-width: 430px;
      margin: 20px auto;
      .cardCont {
        padding: 15px !important;
        &:nth-child(2) {
          margin: 0 !important;
          .levelCard {
            box-shadow: 0px 0px 10px rgba(12, 47, 87, 0.1) !important;
            .priceQuoteSection {
              bottom: 0px !important;
            }
          }
        }
      }
    }
    .cardCont {
      padding: 20px;
      &:nth-child(2) {
        margin: -24px 0px;
        .levelCard {
          box-shadow: 0px 0px 30px rgba(12, 47, 87, 0.2);
          .priceQuoteSection {
            bottom: 25px;
          }
        }
      }
    }
  }
`;

export const SectionHeading = styled.div`
  padding: 20px 0px;
  text-align: center;
  max-width: 950px;
  margin: 0 auto;
  @media (min-width: 1500px) {
    max-width: 1100px;
  }
  h3 {
    font-size: 18px;
    font-weight: normal;
    margin: 15px 0px;
  }
`;

export const TabsContainer = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 30px 0px;
  @media (min-width: 1500px) {
    max-width: 1100px;
  }
  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: 1px solid ${palette.DARK_GREY};
  }
  .ant-tabs-nav-list {
    width: 100%;
    @media (max-width: 576px) {
      width: auto;
    }
    .ant-tabs-tab {
      width: 30%;
      text-align: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 35px;
      color: ${palette.CHARCOAL};
      opacity: 0.6;
      justify-content: center;
      @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: auto;
        padding: 12px;
      }
    }
    .ant-tabs-tab-active {
      color: ${palette.BUTTON_PRIMARY};
      opacity: 1;
    }
  }
  .ant-tabs-ink-bar {
    background: ${palette.BUTTON_PRIMARY};
  }
`;

export const LevelsCard = styled.div`
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 10px rgba(12, 47, 87, 0.1);
  border-radius: 16px;
  height: 100%;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-bottom: 40px;
  }
  .cardTitle {
    border-radius: 16px 16px 0px 0px;
    padding: 20px;
    h4 {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: ${palette.WHITE_COLOR};
      text-align: center;
      text-transform: uppercase;
    }
  }
  .cardBody {
    padding: 40px 30px 80px;
    height: 100%;
    position: relative;
    @media (max-width: 768px) {
      padding: 30px 18px 80px;
    }
  }
  .cardBtn {
    border: transparent !important;
    span {
      color: ${palette.WHITE_COLOR};
      text-transform: uppercase;
    }
  }
  .priceQuoteSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const EditingServicesList = styled.ul`
  list-style: initial;
  margin-left: 25px;
  margin-bottom: 70px;
  li {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${palette.PRIMARY_TXT_COLOR};
    padding: 2px 0px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  .usdPrice {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin: 2px 0px;
    span {
      font-weight: bold;
      font-size: 22px;
    }
  }
  .inrPrice {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    margin: 2px 0px;
    span {
      font-weight: bold;
      font-size: 18px;
    }
    &:before {
      content: '(';
    }
    &:after {
        content: ')';
    }
  }
`;
