import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const FeaturesSection = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 30px 15px;
  }
`;

export const FeatureListItem = styled.li`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .labelText {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: ${palette.NAVLINK_COLOR};
    margin-top: 12px;
  }
  @media (max-width: 576px) {
    min-width: 130px;
    margin: 15px 10px;
    .imageContainer {
      width: 40px;
      height: 40px;
    }
    .labelText {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;
