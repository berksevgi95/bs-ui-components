/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../../utils';

import '../../../index.scss';
import './Row.scss';


export interface IRowProps
  extends React.ComponentProps<'tr'>, IComponentProps {}

const Row: React.FC<IRowProps> = ({
  className,
  id,
  children,
  theme,
  ...props
}) => (

  <tr
    className={`bs bs-table-row ${className || ''} ${theme}`}
    {...props}
  >
    {children}
  </tr>
);

export default Row;
