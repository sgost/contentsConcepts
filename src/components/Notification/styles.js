import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .messageContent {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${palette.WHITE_COLOR};
  }
  a {
    text-decoration: underline;
  }
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 22px;
    height: 22px;
    margin-right: 15px;
  }
`;
