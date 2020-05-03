/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import { IComponentProps } from '../../utils';

import './Checkbox.scss';

export interface ICheckboxProps
  extends React.ComponentProps<'input'>, IComponentProps {
}

const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  id,
  name,
  children,
  ...props
}) => (
  <label className="bs bs-checkbox" htmlFor={id || 'checkbox'}>
    <input
      id={id || 'checkbox'}
      type="checkbox"
      name={name}
      {...props}
    />
    {children}
  </label>
);

export default Checkbox;
