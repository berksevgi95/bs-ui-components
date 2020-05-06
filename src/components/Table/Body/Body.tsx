/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../../utils';

import '../../../index.scss';
import './Body.scss';


export interface IBodyProps
  extends React.ComponentProps<'tbody'>, IComponentProps {}

const Body: React.FC<IBodyProps> = ({
  className,
  id,
  children,
  ...props
}) => (
  <tbody
    className={`bs bs-table-body ${className || ''}`}
    {...props}
  >
    {children}
  </tbody>
);

export default Body;
