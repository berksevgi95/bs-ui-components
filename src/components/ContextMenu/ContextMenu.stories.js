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
      icon: 'zs',
      onClick: (e) => {console.log('lşakd')},
      title: 'şsldşallşk kajdk lkjasldkjal lkajsldj'
    }, {
      icon: 'zs',
      onClick: (e) => {console.log('lşakd')},
      title: 'şsldşallşk'
    }, {
      icon: 'zs',
      onClick: (e) => {console.log('lşakd')},
      title: 'şsldşallşk kljasdlkj'
    }, {
      icon: 'zs',
      onClick: (e) => {console.log('lşakd')},
      title: 'şsldşallşk'
    }, {
      icon: 'zs',
      // onClick: (e) => {console.log('lşakd')},
      title: 'şsldşallşk',
      children: [{
        icon: 'asdads',
        title: 'zöçmcxv',
        onClick: (e) => {console.log('lşakd')},
      }, {
        icon: 'asdads',
        title: 'zöçmcxv',
        onClick: (e) => {console.log('lşakd')},
      }, {
        icon: 'asdads',
        title: 'zöçmcxv',
        onClick: (e) => {console.log('lşakd')},
      }, {
        icon: 'asdads',
        title: 'zöçmcxv',
        onClick: (e) => {console.log('lşakd')},
      }]
    }]}
  >
    <Button>
      asldkaşsdk
    </Button>
  </ContextMenu>
);


export const CustomItem = () => (
  <ContextMenu
    items={<div>asdsad</div>}
  >
    <Button>
      asldkaşsdk
    </Button>
  </ContextMenu>
);
