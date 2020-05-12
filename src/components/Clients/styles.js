import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const ClientsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6% 0%;
`;

export const SectionContent = styled.div`
  max-width: 600px;
  margin: 25px auto;
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  .contentDescription {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
`;

export const ClientsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 30px 0px;
  li {
    padding: 20px;
  }
`;
