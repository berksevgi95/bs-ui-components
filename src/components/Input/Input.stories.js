/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Input from './Input';
import { BSTheme } from '../../utils';

export default {
  title: 'Input',
};

export const Default = () => <Input>Input</Input>;

export const SecondaryTheme = () => <Input theme={BSTheme.SECONDARY}>Input</Input>;

export const ErrorMessage = () => <Input errorMsg="Error!">Input</Input>;

export const ErrorMessageWithSecondaryTheme = () => <Input theme={BSTheme.SECONDARY} errorMsg="Error!">Input</Input>;
