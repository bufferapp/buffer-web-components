import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import TableCell from './index';

storiesOf('TableCell')
  .addDecorator(checkA11y)
  .add('default', () => (
    <TableCell>
      <div />
    </TableCell>
  ));
