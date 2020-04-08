/* eslint-disable react/no-array-index-key */
import React from 'react';

import '../../index.scss';
import './Message.scss';

export enum EMessageTypes {
  ERROR = 'bs-message-error',
  WARNING = 'bs-message-warning',
  SUCCESS = 'bs-message-success',
  INFO = 'bs-message-info'
}

export enum EMessagePosition {
  TOP_LEFT,
  TOP_CENTER,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT
}

interface IMessageParams {
  type: EMessageTypes,
  timeout: number,
  message: string
}

interface IMessageRefParams {
  fire: (messageParams: IMessageParams) => void
}

interface IMessageProps {
  position: EMessagePosition
}

const Message = React.forwardRef<any, IMessageProps>(({
  position,
}, ref) => {
  const [messageList, setMessageList] = React.useState<any[]>([]);

  const messageRef = React.useRef(messageList);
  messageRef.current = messageList;

  const getMessageTimeout = (timeout) => {
    setTimeout(() => {
      const msgArr = [...messageRef.current];
      msgArr.shift();
      setMessageList(msgArr);
    }, timeout);
  };

  React.useImperativeHandle<any, IMessageRefParams>(ref, () => ({
    fire: (messageParams: IMessageParams) => {
      setMessageList([...messageList, {
        message: messageParams.message,
        type: messageParams.type,
      }]);
      getMessageTimeout(messageParams.timeout);
    },
  }), [messageList]);

  const getMessageStyle = () => {
    switch (position) {
      case EMessagePosition.BOTTOM_CENTER:
        return {
          bottom: 0,
          left: 'calc(50% - 150px)',
        };
      case EMessagePosition.BOTTOM_LEFT:
        return {
          bottom: 0,
          left: 0,
        };
      case EMessagePosition.BOTTOM_RIGHT:
        return {
          bottom: 0,
          right: 0,
        };
      case EMessagePosition.TOP_CENTER:
        return {
          top: 0,
          left: 'calc(50% - 150px)',
        };
      case EMessagePosition.TOP_LEFT:
        return {
          top: 0,
          left: 0,
        };
      case EMessagePosition.TOP_RIGHT:
      default:
        return {
          top: 0,
          right: 0,
        };
    }
  };

  return (
    <div
      className="bs-message"
      style={getMessageStyle()}
    >
      {messageList.length > 0 && messageList.map((message, index) => (
        <div className={`bs bs-message-container ${message.type}`} key={index}>
          {message.message}
        </div>
      ))}
    </div>
  );
});

export default Message;
