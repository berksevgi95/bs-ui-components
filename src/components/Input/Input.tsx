// /* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
// import { IComponentProps } from '../../utils';

// import '../../index.scss';
// import './Input.scss';

// export interface IInputProps
//   extends React.ComponentProps<'input'>, IComponentProps {
// }

// const Input: React.FC<IInputProps> = ({
//   className,
//   ...props
// }) => (
//   <input
//     className="bs bs-input"
//     {...props}
//   />
// );

// export default Input;


/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../utils';

import '../../index.scss';
import './Input.scss';

export interface IInputProps
  extends React.ComponentProps<'input'>, IComponentProps {
}

const Input: React.FC<IInputProps> = ({
  className,
  id,
  name,
  children,
  theme,
  ...props
}) => (
  <label className={`bs bs-input ${className || ''} ${theme}`} htmlFor={id || 'text'}>
    {children && (
      <div>
        {children}
      </div>
    )}
    <input
      id={id || 'text'}
      type="text"
      name={name}
      className="bs"
      {...props}
    />
  </label>
);

export default Input;
