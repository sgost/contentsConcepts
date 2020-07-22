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
    max-width: 1100px;
    margin: 25px auto 50px auto;
    @media (min-width: 1500px) {
      max-width: 1300px;
    }
    @media (max-width: 768px) {
      max-width: 480px;
      margin: 0 auto;
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
  h3 {
    font-size: 18px;
    font-weight: normal;
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
    padding: 50px 30px 100px;
    height: 100%;
    position: relative;
    @media (max-width: 768px) {
      padding: 30px 18px 100px;
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

export const QualitySection = styled.div`
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
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
  .qualityContent {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    @media (max-width: 576px) {
      padding: 30px 0px;
    }
    .qualityBadge {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: auto;
      }
    }
    .contentDesc {
      padding-left: 50px;
      h2 {
        font-size: 28px;
        line-height: 42px;
        color: ${palette.SPRING_GREEN};
      }
      p {
        font-size: 16px;
        color: ${palette.LIGHT_GREY};
        margin-top: 12px;
      }
      @media (max-width: 576px) {
        padding: 20px 0px;
        h2, p {
          text-align: center;
        }
      }
    }
  }
`;
