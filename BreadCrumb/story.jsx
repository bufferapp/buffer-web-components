import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import BreadCrumb from './index';

storiesOf('BreadCrumb', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <BreadCrumb
      parentPage="Settings"
      childPage="Posting Schedule"
    />
  ));
