/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Chip from './Chip';
import { BSTheme } from '../../utils/IComponentProps';

export default {
  title: 'Chip',
};

export const Default = () => (
  <div>
    <Chip>Chip1</Chip>
    <Chip>Chip2</Chip>
  </div>
);

export const SecondaryTheme = () => (
  <div>
    <Chip theme={BSTheme.SECONDARY}>Chip1</Chip>
    <Chip theme={BSTheme.SECONDARY}>Chip2</Chip>
  </div>
);

export const AlternativeTheme = () => (
  <div>
    <Chip theme={BSTheme.ALTERNATIVE}>Chip1</Chip>
    <Chip theme={BSTheme.ALTERNATIVE}>Chip2</Chip>
  </div>
);
