/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CloseIcon from '../../assets/icons/close.svg';
import { IComponentProps } from '../../utils/IComponentProps';

import './Chip.scss';
import '../../index.scss';

export interface IChipProps
  extends IComponentProps, React.ComponentProps<'div'> {
}

const Chip: React.FC<IChipProps> = ({
  theme,
  className,
  children,
  ...props
}) => (
  <div
    className={`bs bs-chip ${className || ''} ${theme}`}
    {...props}
  >
    {children}
    <img src={CloseIcon} alt="close-icon" />

  </div>
);

export default Chip;
