/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { IComponentProps } from '../../utils/IComponentProps';

import '../../index.scss';
import './Select.scss';

interface IOption {
  label: string,
  value: any
}

export interface ISelectProps
  extends React.ComponentProps<'button'>, IComponentProps {
  options: IOption[]
}

const Select: React.FC<ISelectProps> = ({
  className,
  style,
  options,
  value,
  onChange,
  name,
  theme,
  ...props
}) => {
  const rootRef = React.useRef<any>();
  const inputRef = React.useRef<any>();
  const [expanded, setExpanded] = React.useState<boolean>();

  const selected = options.filter((option: IOption) => option.value === value);

  const handleOnClick = () => {
    setExpanded(!expanded);
  };

  const handleClickOutside = (e) => {
    if (rootRef.current && !rootRef.current.contains(e.target)) {
      setExpanded(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleClickOption = (e) => {
    if (onChange) {
      onChange(e);
    }
    setExpanded(false);
  };

  return (
    <div style={style} className={`bs-select ${className || ''} ${theme}`} ref={rootRef}>
      <button
        name={name}
        ref={inputRef}
        className="bs bs-selector"
        type="button"
        onKeyUp={() => {}}
        onClick={handleOnClick}
        value={
          selected.length === 0
            ? ''
            : value
        }
        {...props}
      >
        {selected && selected[0] && selected[0].label}
      </button>
      {expanded && (
        <div className="bs-options">
          {options
            && options.length > 0
            && options.map((option: IOption) => (
              <button
                name={name}
                key={option.label.toString()}
                className="bs bs-option"
                type="button"
                value={option.value}
                onClick={handleClickOption}
              >
                {option.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Select;
