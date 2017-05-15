import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import BreadCrumb from './index';

storiesOf('BreadCrumb')
  .addDecorator(checkA11y)
  .add('default', () => (
    <BreadCrumb
      parentPage="Settings"
      childPage="Posting Schedule"
    />
  ));
