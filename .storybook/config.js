import { configure } from "@storybook/react";
import React from 'react';
import { addDecorator } from '@storybook/react';
// automatically import all files ending in *.stories.js
configure([
  require.context("../src", true, /\.stories\.js$/),
  require.context("../src", true, /^((?![\\/]detail[\\/]).)*\.stories\.js$/),
], module);

addDecorator(storyFn => (
  <div className="w-full h-full">
    {
      storyFn({
        reqUrl:'http://10.154.4.56:30001',
        bearerToken: 'Basic YXN0YXJDb3JlT2F1dGhDbGllbnQ6YXN0YXJDb3JlT2F1dGhTZWNyZXQ='
      })
    }
  </div>
));