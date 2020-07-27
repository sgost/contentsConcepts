import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const QualitySection = styled.div`
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
  .qualityContent {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    @media (max-width: 576px) {
      padding: 30px 0px;
    }
    .qualityBadge {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: auto;
      }
    }
    .contentDesc {
      padding-left: 50px;
      h2 {
        font-size: 28px;
        line-height: 42px;
        color: ${palette.SPRING_GREEN};
      }
      p {
        font-size: 16px;
        color: ${palette.LIGHT_GREY};
        margin-top: 12px;
      }
      @media (max-width: 576px) {
        padding: 20px 0px;
        h2, p {
          text-align: center;
        }
      }
    }
  }
`;