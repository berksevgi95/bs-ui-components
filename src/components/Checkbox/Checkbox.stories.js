/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
};

export const Default = () => (
  <form>
    <Checkbox
      id="value1"
      name="value"
      value="value1"
    >
      Value 1
    </Checkbox>
    <Checkbox
      id="value2"
      name="value"
      value="value2"
    >
      Value 2
    </Checkbox>
  </form>
);
