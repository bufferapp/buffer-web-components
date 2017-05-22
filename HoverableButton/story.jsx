import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import HoverableButton from './index';
import HoverableText from '../HoverableText';

storiesOf('HoverableButton')
  .addDecorator(checkA11y)
  .add('default', () => (
    <HoverableButton>Hoverable Button!</HoverableButton>
  ))
  .add('with text that changes text on hover', () => (
    <HoverableButton noStyle>
      <HoverableText>Hover And This Changes Color</HoverableText>
    </HoverableButton>
  ));
