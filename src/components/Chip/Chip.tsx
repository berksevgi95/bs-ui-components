/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CloseIcon from '../../assets/icons/close.svg';
import { IComponentProps } from '../../utils';

import './Chip.scss';
import '../../index.scss';

export interface IChipProps
  extends IComponentProps, React.ComponentProps<'div'> {
  onClose?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void,
}

const Chip: React.FC<IChipProps> = ({
  theme,
  className,
  children,
  onClose,
  ...props
}) => (
  <div
    className={`bs bs-chip ${className || ''} ${theme}`}
    {...props}
  >
    {children}
    {onClose && (
      <img
        src={CloseIcon}
        alt="close-icon"
        role="presentation"
        onClick={onClose}
      />
    )}

  </div>
);

export default Chip;
