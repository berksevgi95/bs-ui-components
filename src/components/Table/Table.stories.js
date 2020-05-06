/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Table from './Table';
import { BSTheme } from '../../utils';

import Button from '../Button/Button';

export default {
  title: 'Table',
};

export const Default = () => (
  <Table.Table>
    <Table.Head>
      <Table.Row>
        <Table.Title>
          Column1
        </Table.Title>
        <Table.Title>
          Column2
        </Table.Title>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          Value1
        </Table.Cell>
        <Table.Cell>
          Value2
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Value3
        </Table.Cell>
        <Table.Cell>
          Value4
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Value5
        </Table.Cell>
        <Table.Cell>
          <Button>
            Value6
          </Button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Table>
);


export const SecondaryTheme = () => (
  <Table.Table theme={BSTheme.SECONDARY}>
    <Table.Head>
      <Table.Row theme={BSTheme.SECONDARY}>
        <Table.Title>
          Column1
        </Table.Title>
        <Table.Title>
          Column2
        </Table.Title>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row theme={BSTheme.SECONDARY}>
        <Table.Cell>
          Value1
        </Table.Cell>
        <Table.Cell>
          Value2
        </Table.Cell>
      </Table.Row>
      <Table.Row theme={BSTheme.SECONDARY}>
        <Table.Cell>
          Value3
        </Table.Cell>
        <Table.Cell>
          Value4
        </Table.Cell>
      </Table.Row>
      <Table.Row theme={BSTheme.SECONDARY}>
        <Table.Cell>
          Value5
        </Table.Cell>
        <Table.Cell>
          <Button>
            Value6
          </Button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Table>
);


export const ListData = () => (
  <Table.Table
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
    onRowDblClick={(data, ev) => console.log(data, ev)}
  />
);


export const CustomRowTemplate = () => (
  <Table.Table
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
    rowTemplate={(data) => (
      <tr>
        <td>
          {data.A}
        </td>
        <td>
          {data.B}
        </td>
      </tr>
    )}
  />
);
