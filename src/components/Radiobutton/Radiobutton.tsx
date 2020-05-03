/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../utils';

import './Radiobutton.scss';

export interface IRadiobuttonProps
  extends React.ComponentProps<'input'>, IComponentProps {
}

const Radiobutton: React.FC<IRadiobuttonProps> = ({
  className,
  id,
  name,
  children,
  ...props
}) => (
  <label className="bs bs-radio" htmlFor={id || 'radiobutton'}>
    <input
      id={id || 'radiobutton'}
      type="radio"
      name={name}
      {...props}
    />
    {children}
  </label>
);

export default Radiobutton;
