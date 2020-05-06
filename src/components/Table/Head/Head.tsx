/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../../utils';

import '../../../index.scss';
import './Head.scss';


export interface IHeadProps
  extends React.ComponentProps<'thead'>, IComponentProps {}

const Head: React.FC<IHeadProps> = ({
  className,
  id,
  children,
  ...props
}) => (
  <thead
    className={`bs bs-table-head ${className || ''}`}
    {...props}
  >
    {children}
  </thead>
);

export default Head;
