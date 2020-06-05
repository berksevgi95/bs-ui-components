/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { IComponentProps } from '../../utils';

import './FloatButton.scss';
import '../../index.scss';

export interface IFloatButtonProps
  extends React.ComponentProps<'button'>, IComponentProps {
  active?: boolean,
  global?: boolean
}

const Button: React.FC<IFloatButtonProps> = ({
  theme,
  children,
  className,
  active,
  global,
  ...props
}) => (
  <button
    type="button"
    className={`
      bs bs-float-button
      ${active ? 'active' : ''}
      ${global ? 'fixed' : ''}
      ${className || ''}
      ${theme}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;
