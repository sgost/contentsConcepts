import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const ContactSection = styled.div`
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

export const FormContainer = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
  border-radius: 8px;
  padding: 70px 115px 24px;
  max-width: 920px;
  margin: 22px auto;
  @media (max-width: 576px) {
    padding: 40px 30px 24px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 50px 50px 24px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 70px 70px 24px;
  }
  .ant-form {
    max-width: 680px;
    margin: 0 auto;
    .ant-form-item {
      margin-bottom: 30px;
      .ant-form-item-with-help {
        margin-bottom: 0 !important;
      }
      .ant-form-item-explain {
        min-height: 30px;
      }
    }
    .inlineInput {
      display: inline-block;
      width: calc(50% - 20px);
      @media only screen and (min-width: 576px) and (max-width: 768px) {
        width: calc(50% - 12px);
      }
      @media (max-width: 576px) {
        width: 100%;
      }
    }
    .emailInput {
      margin-left: 40px;
      @media only screen and (min-width: 576px) and (max-width: 768px) {
        margin-left: 20px;
      }
      @media (max-width: 576px) {
        margin-left: 0;
      }
    }
    .submitButton {
      .ant-form-item-control {
        align-items: center;
        .ant-btn {
          width: 218px;
          font-size: 16px;
          line-height: 24px;
          height: 48px;
          padding: 12px 28px;
          @media (max-width: 576px) {
            width: 100%;
          }
        }
        .ant-form-item-control-input {
          @media (max-width: 576px) {
            width: 100%;
          }
        }
      }
    }
    .inputGroupBlock .ant-form-item-control-input-content {
      @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 920px;
  margin: 0 auto;
  padding: 60px 0px 20px;
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 25px 0px 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 35px 0px 20px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    padding: 15px 0px 15px;
  }
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 45px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${palette.PRIMARY_TXT_COLOR};
    img {
      width: auto;
    }
    span {
      margin-left: 15px;
    }
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      margin: 0px 20px;
    }
    @media (max-width: 576px) {
      margin: 10px 0px;
    }
  }
`;
