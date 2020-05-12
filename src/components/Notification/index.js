import React from "react"
import { Link } from "gatsby"
import { notification } from 'antd';
import closeIcon from "../../images/close_icon.svg"

import {
  MessageContainer,
  MessageContent
} from './styles';

export const Notification = props => {
  return (notification.open({
    message: (
      <MessageContainer>
        <MessageContent>
          <img src={props.image} alt="offer" />
          <p className="messageContent">{props.description}</p>
        </MessageContent>
        <Link to="/" className="messageContent">{props.linkText}</Link>
      </MessageContainer>
    ),
    closeIcon: <img src={closeIcon} alt="close" />,
    onClose: () => {
      console.log('Notification Clicked!');
    },
    duration: 0,
    getContainer: () => document.getElementById('notification-wrapper')
  })
  )
}


