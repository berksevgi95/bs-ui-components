/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../../utils';

import '../../../index.scss';
import './Item.scss';

export interface IItemProps
  extends React.ComponentProps<'li'>, IComponentProps {
  icon?: JSX.Element,
  title?: string,
  subtitle?: string,
  actions?: JSX.Element[]
}

const Item: React.FC<IItemProps> = ({
  className,
  children,
  theme,
  icon,
  title,
  subtitle,
  actions,
  ...props
}) => (children ? (
  <li
    className={`bs bs-list-item ${className || ''} ${theme}`}
    {...props}
  >
    {children}
  </li>
) : (
  <li
    className={`bs bs-list-item integrated ${className || ''} ${theme}`}
    {...props}
  >
    <div className="icon">
      {icon}
    </div>
    <div className="content">
      <div>
        <div className="title">
          {title}
        </div>
        <div className="subtitle">
          {subtitle}
        </div>
      </div>
      {actions && actions.length && (
        <div className="actions">
          {actions.map((action) => <div key={action.key}>{action}</div>)}
        </div>
      )}
    </div>
  </li>
));

export default Item;
