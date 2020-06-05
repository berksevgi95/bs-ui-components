/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import FloatButton from './FloatButton';
import { BSTheme } from '../../utils';

export default {
  title: 'FloatButton',
};

export const Default = () => <FloatButton>Button</FloatButton>;

export const SecondaryTheme = () => <FloatButton theme={BSTheme.SECONDARY}>Button</FloatButton>;

export const AlternativeTheme = () => <FloatButton theme={BSTheme.ALTERNATIVE}>Button</FloatButton>;

export const FixedPosition = () => (
  <div>
    <span className="bs">
      Example of 'absolute' positioned button:
    </span>
    <div style={{
      height: 200,
      width: 300,
      position: 'relative',
      border: '1px solid grey'
    }}>
      <FloatButton>Button</FloatButton>
    </div>
    <span className="bs">
      Example of 'fixed' positioned button:
    </span>

    <FloatButton global>Button</FloatButton>
  </div>
)
