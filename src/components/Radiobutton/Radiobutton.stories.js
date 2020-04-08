/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Radiobutton from './Radiobutton';

export default {
  title: 'Radiobutton',
};

export const Default = () => (
  <form>
    <Radiobutton
      id="value1"
      name="value"
      value="value1"
    >
      Value 1
    </Radiobutton>
    <Radiobutton
      id="value2"
      name="value"
      value="value2"
    >
      Value 2
    </Radiobutton>
  </form>
);
