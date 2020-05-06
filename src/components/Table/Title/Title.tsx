/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../../utils';

import '../../../index.scss';
import './Title.scss';


export interface ITitleProps
  extends React.ComponentProps<'th'>, IComponentProps {}

const Title: React.FC<ITitleProps> = ({
  className,
  id,
  children,
  ...props
}) => (

  <th
    className={`bs bs-table-title ${className || ''}`}
    {...props}
  >
    {children}
  </th>
);

export default Title;
