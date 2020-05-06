/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../../utils';

import '../../../index.scss';
import './Cell.scss';


export interface ICellProps
  extends React.ComponentProps<'td'>, IComponentProps {}

const Cell: React.FC<ICellProps> = ({
  className,
  id,
  children,
  ...props
}) => (
  <td
    className={`bs bs-table-cell ${className || ''}`}
    {...props}
  >
    {children}
  </td>
);

export default Cell;
