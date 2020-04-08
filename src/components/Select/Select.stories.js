/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Select from './Select';
import { BSTheme } from '../../utils/IComponentProps';

export default {
  title: 'Select',
};

export const Default = () => {
  const [value, setValue] = React.useState('a');

  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      options={[{
        label: 'A',
        value: 'a',
      }, {
        label: 'B',
        value: 'b',
      }]}
    />
  );
};


export const SecondaryTheme = () => {
  const [value, setValue] = React.useState('a');

  return (
    <Select
      value={value}
      theme={BSTheme.SECONDARY}
      onChange={(e) => setValue(e.target.value)}
      options={[{
        label: 'A',
        value: 'a',
      }, {
        label: 'B',
        value: 'b',
      }]}
    />
  );
};


export const AlternativeTheme = () => {
  const [value, setValue] = React.useState('a');

  return (
    <Select
      value={value}
      theme={BSTheme.ALTERNATIVE}
      onChange={(e) => setValue(e.target.value)}
      options={[{
        label: 'A',
        value: 'a',
      }, {
        label: 'B',
        value: 'b',
      }]}
    />
  );
};
