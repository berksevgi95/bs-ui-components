/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { IComponentProps } from '../../utils';

import './Button.scss';
import '../../index.scss';

export interface IButtonProps
  extends React.ComponentProps<'button'>, IComponentProps {
  active?: boolean
}

const Button: React.FC<IButtonProps> = ({
  theme,
  children,
  className,
  active,
  ...props
}) => (
  <button
    type="button"
    className={`bs bs-button ${active ? 'active' : ''} ${className || ''} ${theme}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
