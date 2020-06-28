/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '../Button/Button';
import ContextMenu from './ContextMenu';

export default {
  title: 'ContextMenu',
};

export const Default = () => (
  <ContextMenu
    items={[{
      title: 'Item 1'
    }, {
      onClick: (e) => {console.log('lşakd')},
      title: 'Item 2'
    }, {
      onClick: (e) => {console.log('lşakd')},
      title: 'Item 3'
    }, {
      onClick: (e) => {console.log('lşakd')},
      title: 'Item 4'
    }, {
      title: 'Item 5',
      children: [{
        title: 'Item 5.1',
        onClick: (e) => {console.log('lşakd')},
      }, {
        title: 'Item 5.2',
        onClick: (e) => {console.log('lşakd')},
        children: [{
          title: 'Item 5.2.1',
          onClick: (e) => {console.log('lşakd')},
        }, {
          title: 'Item 5.2.2',
          onClick: (e) => {console.log('lşakd')},
        }, {
          title: 'Item 5.2.3',
          onClick: (e) => {console.log('lşakd')},
        }]
      }, {
        title: 'Item 5.3',
        onClick: (e) => {console.log('lşakd')},
      }, {
        title: 'Item 5.4',
        onClick: (e) => {console.log('lşakd')},
      }]
    }]}
  >
    <Button>
      Right Click on me
    </Button>
  </ContextMenu>
);