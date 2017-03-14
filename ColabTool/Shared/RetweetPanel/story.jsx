import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import RetweetPanel from './index';

storiesOf('RetweetPanel')
  .addDecorator(checkA11y)
  .add('default', () => (
    <RetweetPanel
      name={'Joel Gascoigne'}
      handle={'@joelgascoigne'}
      avatarUrl={'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png'}
    />
  ));
