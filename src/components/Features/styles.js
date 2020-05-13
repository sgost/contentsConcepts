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
`;

export const FeatureListItem = styled.li`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .imageContainer {
    width: 64px;
    height: 64px;
  }
  .labelText {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: ${palette.NAVLINK_COLOR};
    margin-top: 12px;
  }
`;
