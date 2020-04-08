/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from './Button';
import { BSTheme } from '../../utils/IComponentProps';

export default {
  title: 'Button',
};

export const Default = () => <Button>Button</Button>;

export const SecondaryTheme = () => <Button theme={BSTheme.SECONDARY}>Button</Button>;

export const AlternativeTheme = () => <Button theme={BSTheme.ALTERNATIVE}>Button</Button>;
