import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const SpecializationSection = styled.div`
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
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
  .specialitiesContent {
    max-width: 1100px;
    margin: 0 auto;
    padding: 35px 0px;
    @media (min-width: 1500px) {
      max-width: 1300px;
    }
  }
  .badgeWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: auto;
    }
  }
`;

export const ContentSection = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 15px 0px;
  h2 {
    color: ${palette.WHITE_COLOR};
    text-align: center;
    span {
      color: ${palette.SPRING_GREEN};
    }
  }
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${palette.LIGHT_GREY};
    margin: 15px 0px;
  }
`;

export const SpecialityListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-left: 40px;
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding-left: 30px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 15px !important;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding-left: 0;
    margin-top: 30px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: 30px;
  }
`;

export const SpecialityList = styled.li`
  padding-left: 0;
  background: ${palette.WHITE_COLOR};
  box-shadow: 2px 4px 8px rgba(13, 22, 40, 0.1);
  border-radius: 8px;
  margin: 15px 30px;
  padding: 45px 30px;
  max-width: 25%;
  border-left: 6px solid ${props => props.theme};
  p {
    margin: 15px 0px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 15px 20px;
    padding: 35px 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 15px !important;
    padding: 18px !important;
    max-width: 25% !important;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 15px;
    padding: 15px;
    max-width: 35%;
  }
  @media (max-width: 576px) {
    max-width: 100%;
    margin: 15px;
  }
`;
