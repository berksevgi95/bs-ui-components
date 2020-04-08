/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Message, { EMessageTypes, EMessagePosition } from './Message';
import Button from '../Button/Button';

export default {
  title: 'Message',
};

export const Default = () => {
  const messageRef = React.useRef();
  return (
    <>
      <Button
        onClick={() => messageRef.current.fire({
          type: EMessageTypes.ERROR,
          timeout: 5000,
          message: 'Error',
        })}
      >
        Create Error Message
      </Button>
      <Button
        onClick={() => messageRef.current.fire({
          type: EMessageTypes.SUCCESS,
          timeout: 5000,
          message: 'Success',
        })}
      >
        Create Sucess Message
      </Button>
      <Button
        onClick={() => messageRef.current.fire({
          type: EMessageTypes.WARNING,
          timeout: 5000,
          message: 'Warning',
        })}
      >
        Create Warning Message
      </Button>
      <Button
        onClick={() => messageRef.current.fire({
          type: EMessageTypes.INFO,
          timeout: 5000,
          message: 'Info',
        })}
      >
        Create Info Message
      </Button>
      <Message
        ref={messageRef}
      />
    </>
  );
};


export const CustomPosition = () => {
  const messageRef = React.useRef();
  return (
    <>
      <Button
        onClick={() => messageRef.current.fire({
          type: EMessageTypes.ERROR,
          timeout: 5000,
          message: 'Error',
        })}
      >
        Create Error Message
      </Button>
      <Button
        onClick={() => messageRef.current.fire({
          type: EMessageTypes.SUCCESS,
          timeout: 5000,
          message: 'Success',
        })}
      >
        Create Sucess Message
      </Button>
      <Button
        onClick={() => messageRef.current.fire({
          type: EMessageTypes.WARNING,
          timeout: 5000,
          message: 'Warning',
        })}
      >
        Create Warning Message
      </Button>
      <Button
        onClick={() => messageRef.current.fire({
          type: EMessageTypes.INFO,
          timeout: 5000,
          message: 'Info',
        })}
      >
        Create Info Message
      </Button>
      <Message
        position={EMessagePosition.BOTTOM_CENTER}
        ref={messageRef}
      />
    </>
  );
};
