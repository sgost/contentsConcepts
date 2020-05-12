import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const BannerSection = styled.div`
  overflow: hidden;
  .ant-row {
    flex-wrap: nowrap;
  }
  .contentSection {
    margin: 0 auto;
    max-width: 600px;
    padding-left: 50px;
    padding: 9% 0 9% 4%;
  }
`;

export const ContentContainer = styled.div`

`;

export const Content = styled.p`
  font-weight: normal;
  font-size: 22px;
  line-height: 40px;
  color: ${palette.PRIMARY_TXT_COLOR};
  span {
    color: ${palette.HIGHLIGHT_TEXT};
    font-weight: 600;
  }
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
  li {
    padding: 10px 12px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -25%;
  right: 0;
`;
