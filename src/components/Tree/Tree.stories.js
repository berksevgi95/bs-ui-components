/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Tree from './Tree'
import { BSTheme } from '../../utils';

export default {
  title: 'Tree',
};

export const Default = () => {
  const ref = React.useRef();

  return (
    <Tree
      ref={ref}
      items={[{
        id: 1,
        title: '1',
      },{
        id: 2,
        title: '2',
        children: [{
          id: 3,
          title: '3',
          children: [{
            title: '4',
          }]
        }]
      },{
        id: 4,
        title: '5',
      },]}
    />
  )
};
