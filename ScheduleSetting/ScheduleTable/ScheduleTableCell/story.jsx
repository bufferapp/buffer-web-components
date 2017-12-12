import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTableCell from './index';

const time = {
  value: {
    hours: 19,
    minutes: 41,
  },
  onChange: action('on-change'),
  onRemoveTimeClick: action('on-remove-time-click')
};

storiesOf('ScheduleTableCell')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTableCell time={time} />
  ))
  .add('disabled', () => (
    <ScheduleTableCell
      disabled
      time={time}
    />
  ))
  .add('24-hour time setting', () => (
    <ScheduleTableCell
      select24Hours
      time={time}
    />
  ))
  .add('24-hour time setting, disabled', () => (
    <ScheduleTableCell
      disabled
      select24Hours
      time={time}
    />
  ));
