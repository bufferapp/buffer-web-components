import React from 'react';
import {
  action,
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTableColumn from './index';

const dayName = 'Monday';
const times = [
  {
    value: {
      hours: 9,
      minutes: 41,
    },
    onChange: action('on-change'),
  },
  {
    value: {
      hours: 19,
      minutes: 0,
    },
    onChange: action('on-change'),
  },
];
const timesSingle = [
  {
    value: {
      hours: 9,
      minutes: 41,
    },
    onChange: action('on-change'),
  },
];

const timesEmpty = [];

storiesOf('ScheduleTableColumn')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTableColumn
      dayName={dayName}
      times={times}
    />
  ))
  .add('with a single time', () => (
    <ScheduleTableColumn
      dayName={dayName}
      times={timesSingle}
    />
  ))
  .add('without times', () => (
    <ScheduleTableColumn
      dayName={dayName}
      times={timesEmpty}
    />
  ));
