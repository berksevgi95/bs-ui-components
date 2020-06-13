/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../utils';
import Item from './Item/Item';

import '../../index.scss';
import './List.scss';

export interface IListProps
  extends React.ComponentProps<'ul'>, IComponentProps {}

const List: React.FC<IListProps> = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <ul
    ref={ref}
    className={`bs bs-list ${className || ''}`}
    {...props}
  >
    {children}
  </ul>
));

export default {
  List,
  Item,
};
