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
    margin: 50px 15px 15px;
    &:first-child {
      margin-top: 15px;
    }
  }
`;

export const CircleImage = styled.div`
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 16px rgba(21, 39, 73, 0.25);
  border-radius: 100%;
  height: 100px;
  width: 100px;
  position: absolute;
  border: 4px solid ${palette.WHITE_COLOR};
  top: -14%;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    top: -11%;
  }
`;

export const WrapperDetails = styled.div`
  position: relative;
  padding-top: 80px;
  p {
    text-align: center;
  }
  @media (max-width: 576px) {
    padding-top: 60px;
  }
`;

export const ContentBg = styled.div`
  position: absolute;
  left: 0px;
  top: 55px;
  @media (max-width: 576px) {
    top: 30px;
  }
`;

export const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0px;
  h4 {
    color: ${palette.COLOR_DENIM};
    margin: 3px 0px;
    text-align: center;
  }
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: ${palette.SECONDARY_TXT_COLOR};
    margin: 3px 0px;
    display: block;
  }
`;
