/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { v1 as uuidV1 } from 'uuid';
import Button from '../Button/Button';
import CloseIcon from '../../assets/icons/close.svg';

import { IComponentProps } from '../../utils';

import '../../index.scss';
import './Dialog.scss';


interface IActionsProps
  extends IComponentProps, React.ComponentProps<'button'> {}

export interface IDialogProps
  extends IComponentProps, React.ComponentProps<'div'> {
  title: string,
  open: boolean,
  actions: IActionsProps[],
  handleClose: (e: any) => void,
  closeOnEsc: boolean,
  closeButton: boolean
}

const Dialog:React.FC<IDialogProps> = ({
  title,
  className,
  open,
  children,
  theme,
  actions,
  handleClose,
  closeOnEsc,
  closeButton,
}) => {
  const handleKeyUp = (e) => {
    if (handleClose && e.keyCode === 27) {
      handleClose(e);
    }
  };

  React.useEffect(() => {
    if (closeOnEsc) {
      if (open) {
        document.addEventListener('keyup', handleKeyUp, true);
      } else {
        document.removeEventListener('keyup', handleKeyUp, true);
      }
    }
  }, [open]);

  const handleClickBackground = (e) => {
    if (handleClose) {
      handleClose(e);
    }
  };

  const handlePreventClose = (e) => {
    e.stopPropagation();
  };

  return open ? (
    <div
      className={`bs bs-dialog ${className || ''} ${theme}`}
      role="button"
      tabIndex={0}
      aria-label="dialog-background"
      onKeyUp={() => {}}
      onClick={handleClickBackground}
    >
      <div
        className="panel"
        role="button"
        tabIndex={0}
        aria-label="dialog-panel"
        onKeyUp={() => {}}
        onClick={handlePreventClose}
      >
        <div className="header">
          <span>
            {title}
          </span>
          {closeButton && (
            <img
              role="presentation"
              aria-label="close-button"
              onKeyUp={() => {}}
              onClick={handleClose}
              src={CloseIcon}
              alt="close-icon"
            />
          )}
        </div>
        <div className="content">
          {children}
        </div>
        <div className="actions">
          {actions && actions.length > 0 && actions.map((action: IActionsProps) => (
            <Button key={uuidV1()} {...action}>
              {action.children}
            </Button>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};


export default Dialog;
