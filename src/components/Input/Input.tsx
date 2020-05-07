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
  <div
    className={`bs bs-input ${theme}`}
  >
    {children && (
      <div>
        {children}
      </div>
    )}
    <div>
      <input
        ref={ref}
        type="text"
        name={name}
        className={`bs ${errorMsg ? 'bs-input-error' : ''} ${className || ''}`}
        {...props}
      />
      {errorMsg && (
        <div className="bs-input-error-message">
          {errorMsg}
        </div>
      )}
    </div>
  </div>
));

export default Input;
