/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../utils';

import '../../index.scss';
import './Input.scss';

export interface IInputProps
  extends React.ComponentProps<'input'>, IComponentProps {
  errorMsg?: string
}

const Input: React.FC<IInputProps> = React.forwardRef(({
  className,
  id,
  name,
  children,
  theme,
  errorMsg,
  ...props
}, ref) => (
  <label
    className={`bs bs-input ${theme}`}
    htmlFor={id || 'text'}
  >
    {children && (
      <div>
        {children}
      </div>
    )}
    <input
      ref={ref}
      id={id || 'text'}
      type="text"
      name={name}
      className={`bs ${errorMsg ? 'bs-input-error' : ''} ${className || ''}`}
      {...props}
    />
    {errorMsg && (
      <span>
        {errorMsg}
      </span>
    )}
  </label>
));

export default Input;
