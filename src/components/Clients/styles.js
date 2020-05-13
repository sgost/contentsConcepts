import styled from 'styled-components';

export const ClientsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6% 0%;
`;

export const SectionContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 25px 20px;
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    text-align: center;
  }
`;

export const ClientsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 30px 20px;
  li {
    margin: 20px 15px;
  }
`;
