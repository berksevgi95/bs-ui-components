/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dialog from './Dialog';
import Button from '../Button/Button';
import { BSTheme } from '../../utils';

export default {
  title: 'Dialog',
};

export const Default = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        title="Dialog"
        closeOnEsc
        closeButton
        open={open}
        theme={BSTheme.PRIMARY}
        handleClose={() => setOpen(false)}
        actions={[
          {
            onClick: () => setOpen(false),
            children: 'Cancel',
            theme: BSTheme.PRIMARY,
          },
          {
            onClick: () => setOpen(false),
            children: 'OK',
            theme: BSTheme.SECONDARY,
          },
        ]}
      >
        Dialog
      </Dialog>
    </>
  );
};


export const SecondaryTheme = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        title="Dialog"
        closeOnEsc
        closeButton
        open={open}
        theme={BSTheme.SECONDARY}
        handleClose={() => setOpen(false)}
        actions={[
          {
            onClick: () => setOpen(false),
            children: 'Cancel',
            theme: BSTheme.PRIMARY,
          },
          {
            onClick: () => setOpen(false),
            children: 'OK',
            theme: BSTheme.SECONDARY,
          },
        ]}
      >
        Dialog
      </Dialog>
    </>
  );
};


export const AlternativeTheme = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        title="Dialog"
        closeOnEsc
        closeButton
        open={open}
        theme={BSTheme.ALTERNATIVE}
        handleClose={() => setOpen(false)}
        actions={[
          {
            onClick: () => setOpen(false),
            children: 'Cancel',
            theme: BSTheme.ALTERNATIVE,
          },
          {
            onClick: () => setOpen(false),
            children: 'OK',
            theme: BSTheme.ALTERNATIVE,
          },
        ]}
      >
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog
        Dialog

      </Dialog>
    </>
  );
};
