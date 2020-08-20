import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const CustomersSection = styled.div`
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

export const CustomersList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 50px 0px;
  @media (min-width: 1500px) {
    max-width: 1300px;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Customer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 30px 40px 20px;
  max-width: 25%;
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 8px rgba(21, 39, 73, 0.15);
  border-radius: 8px;
  padding: 30px;
  position: relative;
  h3 {
    margin: 0px 0px 15px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 30px 25px 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 20px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    max-width: 40%;
    margin: 40px 20px 20px;
  }
  @media (max-width: 576px) {
    max-width: 100%;
    margin: 90px 15px 15px;
    &:first-child {
      margin-top: 15px;
    }
  }
`;

export const CircleImage = styled.div`
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 16px rgba(21, 39, 73, 0.25);
  border-radius: 100%;
  height: 108px;
  width: 108px;
  border: 4px solid ${palette.WHITE_COLOR};
  overflow: hidden;
  z-index: 1;
  img {
    border-radius: 100%;
    height: 100%;
    display: inline-block;
    object-fit: cover;
  }
`;

export const WrapperDetails = styled.div`
  position: relative;
  margin-left: 32px;
  padding-top: 25px;
  padding-left: 32px;
  @media (max-width: 768px) {
    padding: 40px 20px 30px;
    margin-left: 0;
  }
`;

export const ContentBg = styled.div`
  position: absolute;
  left: 0px;
  top: 3px;
  @media (max-width: 768px) {
    top: 18px;
    left: 0px;
  }
`;

export const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px 28px;
  h4 {
    color: ${palette.COLOR_DENIM};
    margin-top: 16px;
  }
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${palette.SECONDARY_TXT_COLOR};
    display: block;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 8px rgba(21,39,73,0.15);
  border-radius: 8px;
  max-width: 990px;
  margin: 50px auto;
  @media (min-width: 1500px) {
    max-width: 1200px;
    margin: 0 auto;
  }
  .row {
    align-items: center;
    margin: 0 100px;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      margin: 0 80px;
    }
  }
  .ant-carousel .slick-list .slick-slide > div > div {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    padding: 45px;
    position: relative;
  }
  .slick-dots {
    bottom: 50px !important;
  }
  .ant-carousel .slick-dots li {
    width: 20px;
    height: 5px;
  }
  .ant-carousel .slick-dots li.slick-active {
    width: 20px;
  }
  .ant-carousel .slick-dots li button {
    height: 5px;
    border-radius: 8px;
    background: ${palette.BLACK_COLOR};
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: #1976D1;
  }
  .leftArrow, .rightArrow {
    width: 32px;
    height: 32px;
    padding: 10px;
    background: ${palette.WHITE_COLOR};
    box-shadow: 0px 0px 8px rgba(21, 39, 73, 0.15);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${palette.CHARCOAL};
    z-index: 1;
  }
  .leftArrow {
    left: 50px;
  }
  .rightArrow {
    right: 50px;
  }
  @media (max-width: 768px) {
    .leftArrow, .rightArrow {
      display: none;
    }
    .ant-carousel .slick-list .slick-slide > div > div {
      padding: 40px 20px 20px;
    }
    .row {
      margin: 0;
      .ant-col {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const CustomBg = styled.div`
  position: relative;
  display: inline-block;
  &:before {
    content: '';
    background: ${palette.BUTTON_PRIMARY};
    border-radius: 100%;
    width: 96px;
    height: 96px;
    position: absolute;
    z-index: -1;
    left: -15%;
    top: -15%;
  }
  &:after {
    content: '';
    background: ${palette.WHITE_COLOR};
    border-radius: 100%;
    width: 55px;
    height: 55px;
    position: absolute;
    z-index: -1;
    right: 0%;
    bottom: -10%;
    box-shadow: 0px 0px 16px rgba(21, 39, 73, 0.25);
  }
`;
