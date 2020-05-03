/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Table from './Table';

export default {
  title: 'Table',
};

export const Default = () => (
  <Table
    columns={[{
      field: 'A',
      title: 'A',
    }, {
      field: 'B',
      title: 'B',
    }]}
    data={[{
      A: 2,
      B: 24,
    }, {
      A: 12,
      B: 64,
    }, {
      A: 2,
      B: 24,
    }, {
      A: 2,
      B: 24,
    }, {
      A: 2,
      B: 24,
    }]}
  />
);
