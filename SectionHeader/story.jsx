import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import {
  Text,
} from '@bufferapp/components';
import { checkA11y } from 'storybook-addon-a11y';
import SectionHeader from './index';

storiesOf('SectionHeader')
  .addDecorator(checkA11y)
  .add('default', () => (
    <SectionHeader>
      <Text color={'outerSpace'}>
        A section header
      </Text>
    </SectionHeader>
  ));
