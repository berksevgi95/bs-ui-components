/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../utils';

import '../../index.scss';
import './Input.scss';

export interface IInputProps
  extends React.ComponentProps<'input'>, IComponentProps {
  inputClassname?: string,
  errorMsg?: string
}

const Input: React.FC<IInputProps> = React.forwardRef(({
  className,
  id,
  name,
  children,
  theme,
  errorMsg,
  inputClassname,
  onInvalid,
  ...props
}, ref) => {
  const [errorMessage, setErrorMessage] = React.useState<string>(errorMsg);

  React.useEffect(() => {
    setErrorMessage(errorMsg);
  }, [errorMsg]);

  const handleOnInvalid = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setErrorMessage('Not a valid value');
    if (onInvalid) {
      onInvalid(event);
    }
  };

  return (
    <div
      className={`bs bs-input ${className || ''} ${theme}`}
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
          className={`bs ${errorMessage ? 'bs-input-error' : ''} ${inputClassname || ''}`}
          onInvalid={handleOnInvalid}
          {...props}
        />
        {errorMessage && (
          <div className="bs-input-error-message">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
});

export default Input;
