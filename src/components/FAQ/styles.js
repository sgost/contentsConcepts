import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const FAQContainer = styled.div`
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

export const QuestionList = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 25px 0px;
  .ant-collapse {
    padding-left: 50px;
    background: transparent !important;
  }
  .ant-collapse-header {
    padding: 16px;
    padding-left: 0 !important;
    .anticon {
      right: 0;
      left: unset !important;
      color: ${palette.COLOR_DENIM} !important;
      font-size: 16px !important;
    }
    .quesNumber {
      position: absolute;
      left: -45px;
      color: #7D7D7D;
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
    h3 {
      font-size: 14px;
    }
  }
  .ant-collapse-content-box {
    padding: 15px 0px;
    p {
      color: #7D7D7D;
    }
  }
  .ant-collapse-item-active {
    .ant-collapse-header {
      border: none !important;
    }
    .quesNumber, h3 {
      color: ${palette.COLOR_DENIM};
    }
    h3 {
      font-size: 20px;
    }
  }
`;
