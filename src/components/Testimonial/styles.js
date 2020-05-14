import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const TestimonialSection = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
  padding: 128px 80px;
  @media (max-width: 576px) {
    padding: 70px 50px;
  }
`;

export const TestimonialList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1000px;
  margin: 0 auto;
  padding: 25px 30px;
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 8px rgba(0, 8, 77, 0.2);
  border-radius: 16px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const TestimonialListItem = styled.li`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .titleText {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-top: 5px;
    text-align: center;
  }
`;

export const CountWrapper = styled.div`
  text-align: center;
  h2 {
    position: relative;
    .customDot {
      font-size: 18px;
      margin-left: 2px;
      position: absolute;
      bottom: -6px;
      color: ${palette.LIGHT_BLUE};
    }
  }
`;

export const StatusCircle = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: ${props => props.theme};
  border-radius: 100%;
`;
