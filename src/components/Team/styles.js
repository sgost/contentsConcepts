import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const TeamSection = styled.div`
  background: ${palette.WHITE_COLOR};
  padding: 60px 80px;
  max-width: 880px;
  margin: 0 auto;
  @media (min-width: 1500px) {
    max-width: 1000px;
  }
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

export const TeamMembers = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 25px 0px;
  @media (max-width: 576px) {
    padding: 10px 0px;
  }
`;

export const MemberInfo = styled.li`
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 8px rgba(0, 8, 77, 0.2);
  border-radius: 16px;
  padding: 35px 55px 55px;
  margin: 16px 0px;
  .infoSection {
    display: flex;
    flex-direction: row;
  }
  .memberDetails {
    margin-left: 22px;
    border-bottom: 1px solid ${palette.LIGHT_GREY};
    flex: 2;
    padding-bottom: 15px;
    h3 {
      font-weight: 500;
    }
    .role {
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: ${palette.PRIMARY_TXT_COLOR};
      margin-top: 3px;
      display: inline-block;
    }
  }
  p {
    line-height: 28px;
    color: ${palette.NAVLINK_COLOR};
    padding: 15px 0px 10px;
  }
  @media (max-width: 576px) {
    margin: 15px 0px;
    padding: 30px;
    .memberDetails {
      margin-left: 16px;
    }
  }
`;

export const CircleImage = styled.div`
  background: ${props => props.theme};
  box-shadow: 0px 0px 16px rgba(21, 39, 73, 0.25);
  border-radius: 100%;
  height: 80px;
  width: 80px;
  border: 4px solid ${palette.WHITE_COLOR};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
  }
`;
