import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import TableCell from './index';

/* eslint-disable react/prop-types */
const HoverableFocusableThing = ({ hovered, focused }) => <div>{hovered} - {focused}</div>;
/* eslint-enable react/prop-types */

storiesOf('TableCell', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <TableCell>
      <HoverableFocusableThing />
    </TableCell>
  ));
