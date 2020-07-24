import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const TeamSection = styled.div`
  background: ${palette.WHITE_COLOR};
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

export const TeamMembers = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 25px 0px;
  max-width: 1024px;
  margin: 0 auto;
  @media (min-width: 1500px) {
    max-width: 1100px;
  }
  @media (max-width: 576px) {
    padding: 10px 0px;
  }
`;

export const MemberInfo = styled.li`
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 8px rgba(0, 8, 77, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin: 25px 0px;
  h3 {
    font-weight: 500;
  }
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 3px 0px 10px;
    display: inline-block;
  }
  p {
    line-height: 28px;
    color: ${palette.NAVLINK_COLOR};
    border-top: 1px solid ${palette.LIGHT_GREY};
    padding: 10px 0px;
  }
  @media (max-width: 576px) {
    margin: 15px 0px;
  }
`;
