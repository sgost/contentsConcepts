import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const MenuContainer = styled.div`
  padding: 60px 30px;
  max-width: 1100px;
  margin: 0 auto;
  @media (min-width: 1500px) {
    max-width: 1300px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
  .ant-layout {
    background: ${palette.WHITE_COLOR};
    @media (max-width: 576px) {
      flex-direction: column-reverse;
    }
  }
  .ant-layout-content {
    padding: 0px 30px;
    min-height: 280px;
    width: 75%;
    @media only screen and (min-width: 576px) and (max-width: 992px) {
      padding: 0px 10px;
    }
    @media (max-width: 576px) {
      width: 100%;
      padding: 30px 0px;
    }
  }
  .ant-layout-sider {
    width: 25% !important;
    margin: 0px 30px;
    @media only screen and (min-width: 576px) and (max-width: 992px) {
      margin: 0px 10px;
    }
    @media (max-width: 576px) {
      width: 100%;
      max-width: 100% !important;
      min-width: 100% !important;
      margin: 0;
    }
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  h2 {
    font-size: 32px;
    line-height: 48px;
  }
  span {
    font-weight: normal;
    font-size: 16px;
    line-height: 40px;
    color: #1976D2;
    margin-left: 15px;
  }
  @media only screen and (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    align-items: start;
    h2 {
      line-height: 40px;
    }
    span {
      margin-left: 0;
      line-height: 30px;
    }
  }
`;

export const TypesContainer = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #333333;
  margin: 8px 0px;
`;

export const FeaturesListContainer = styled.ul`
  margin: 35px 0px;
`;

export const FeatureSecList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
  img {
    width: 16px;
    height: 16px;
    opacity: 0.5;
  }
  p {
    font-size: 16px;
    margin-left: 12px;
  }
`;

export const RefundSection = styled.div`
  p {
    font-size: 20px;
    line-height: 30px;
  }
  .refundText {
    font-weight: 600;
    margin-top: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction row;
  margin: 35px 0px;
  .ant-btn {
    font-size: 14px;
    line-height: 21px;
    height: 38px;
    padding: 8px 24px;
    margin-right: 20px;
    &:last-child {
      margin-left: 0;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      margin-right: 10px;
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    flex-wrap: wrap;
    .ant-btn {
      margin: 5px 10px 5px 0px;
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
    margin: 30px 20px;
    .ant-btn {
      width: 100%;
      margin: 10px 0px;
    }
  }
`;
