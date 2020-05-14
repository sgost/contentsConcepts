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

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  padding-bottom: 40px;
  max-width: 1100px;
  margin: 0 auto;
  @media (min-width: 1500px) {
    max-width: 1300px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 40px 20px;
  max-width: 25%;
  h3 {
    margin: 25px 0px 15px;
    text-align: center;
  }
  .imageContainer {
    width: 80px;
    height: 80px;
  }
  p {
    text-align: center;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 20px 30px 12px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 15px 20px 10px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 15px 20px 10px;
    max-width: 40%;
  }
  @media (max-width: 576px) {
    max-width: 100%;
    margin: 25px 15px;
    h3 {
      margin: 12px 0px 8px;
    }
    p {
      margin-bottom: 15px;
    }
  }
`;
