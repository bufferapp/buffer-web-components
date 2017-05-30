import React from 'react';
import {
  action,
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTableCell from './index';

const time = {
  value: {
    hours: 9,
    minutes: 41,
  },
  onChange: action('on-change'),
};

storiesOf('ScheduleTableCell')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTableCell time={time} />
  ));
