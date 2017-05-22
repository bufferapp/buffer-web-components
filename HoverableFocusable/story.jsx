import React from 'react';
import {
  action,
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import {
  Button,
  Link,
} from '@bufferapp/components';
import HoverableFocusable from './index';

storiesOf('HoverableFocusable')
  .addDecorator(checkA11y)
  .add('with Button', () => (
    <HoverableFocusable>
      <Button onClick={action('on-click')}>Hoverable + Focusable</Button>
    </HoverableFocusable>
  ))
  .add('with warning Button', () => (
    <HoverableFocusable>
      <Button warning onClick={action('on-click')}>Danger!</Button>
    </HoverableFocusable>
  ))
  .add('with Link', () => (
    <HoverableFocusable>
      <Link href={'https://buffer.com'}>Hoverable + Focusable Link</Link>
    </HoverableFocusable>
  ));
