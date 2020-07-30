import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const MediumLinksContainer = styled.div`
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

export const ArticlesList = styled.div`
  .ant-row {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .ant-col {
    padding: 20px;
    @media (max-width: 576px) {
      padding: 20px 0px;
    }
    a {
      font-size: 16px;
      font-weight: 500;
      color: ${palette.PRIMARY_TXT_COLOR};
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        margin-top: 10px;
      }
      img {
        width: 330px;
        height: 100px;
        object-fit: cover;
      }
    }
  }
`;
