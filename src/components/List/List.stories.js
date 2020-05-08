/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import List from './List';
import CloseIcon from '../../assets/icons/close.svg';
import CheckIcon from '../../assets/icons/check.svg';
import Button from '../Button/Button';
import { BSTheme } from '../../utils';

export default {
  title: 'List',
};

export const Default = () => (
  <List.List>
    <List.Item
      icon={
        <img src={CloseIcon} alt="close-icon" />
      }
      title="Item 1"
      subtitle="Subtitle of Item 1"
      actions={[
        <Button>
          <img src={CheckIcon} alt="check-icon" />
        </Button>,
        <Button>
          <img src={CloseIcon} alt="close-icon" />
        </Button>,
      ]}
    />
    <List.Item
      icon={
        <img src={CloseIcon} alt="close-icon" />
      }
      title="Item 2"
      subtitle="Subtitle of Item 2"
      actions={[
        <Button>
          <img src={CheckIcon} alt="check-icon" />
        </Button>,
        <Button>
          <img src={CloseIcon} alt="close-icon" />
        </Button>,
      ]}
    />
    <List.Item
      icon={
        <img src={CloseIcon} alt="close-icon" />
      }
      title="Item 3"
      subtitle="Subtitle of Item 3"
      actions={[
        <Button>
          <img src={CheckIcon} alt="check-icon" />
        </Button>,
        <Button>
          <img src={CloseIcon} alt="close-icon" />
        </Button>,
      ]}
    />
  </List.List>
);

export const SecondaryTheme = () => (
  <List.List>
    <List.Item
      theme={BSTheme.SECONDARY}
      icon={
        <img src={CloseIcon} alt="close-icon" />
      }
      title="Item 1"
      subtitle="Subtitle of Item 1"
      actions={[
        <Button>
          <img src={CheckIcon} alt="check-icon" />
        </Button>,
      ]}
    />
    <List.Item
      theme={BSTheme.SECONDARY}
      icon={
        <img src={CloseIcon} alt="close-icon" />
      }
      title="Item 2"
      subtitle="Subtitle of Item 2"
      actions={[
        <Button>
          <img src={CheckIcon} alt="check-icon" />
        </Button>,
      ]}
    />
    <List.Item
      theme={BSTheme.SECONDARY}
      icon={
        <img src={CloseIcon} alt="close-icon" />
      }
      title="Item 3"
      subtitle="Subtitle of Item 3"
      actions={[
        <Button>
          <img src={CheckIcon} alt="check-icon" />
        </Button>,
      ]}
    />
  </List.List>
);

export const CustomChildren = () => (
  <List.List>
    <List.Item>
      Custom Item1
    </List.Item>
    <List.Item>
      Custom Item2
    </List.Item>
  </List.List>
);

export const CustomChildrenWithSecondaryTheme = () => (
  <List.List>
    <List.Item theme={BSTheme.SECONDARY}>
      Custom Item1
    </List.Item>
    <List.Item theme={BSTheme.SECONDARY}>
      Custom Item2
    </List.Item>
  </List.List>
);
