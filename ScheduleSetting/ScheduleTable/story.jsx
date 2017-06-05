import React from 'react';
import {
  action,
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTable from './index';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
const singleTime = [
  {
    value: {
      hours: 9,
      minutes: 41,
    },
    onChange: action('on-change'),
  },
];
const noTimes = [];

const days = [];
const daysSingleTime = [];
const daysNoTimes = [];

daysOfWeek.forEach((dayName) => {
  days.push({
    dayName,
    postingTimesTotal: times.length,
    times,
  });
  daysSingleTime.push({
    dayName,
    postingTimesTotal: singleTime.length,
    times: singleTime,
  });
  daysNoTimes.push({
    dayName,
    postingTimesTotal: noTimes.length,
    times: noTimes,
  });
});

storiesOf('ScheduleTable')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTable
      day={days}
    />
  ))
  .add('disabled', () => (
    <ScheduleTable
      day={days}
      disabled
    />
  ))
  .add('24-hour time setting', () => (
    <ScheduleTable
      day={days}
      select24Hours
    />
  ))
  .add('24-hour time setting, disabled', () => (
    <ScheduleTable
      day={days}
      disabled
      select24Hours
    />
  ))
  .add('single time', () => (
    <ScheduleTable
      day={daysSingleTime}
    />
  ))
  .add('no times', () => (
    <ScheduleTable
      day={daysNoTimes}
    />
  ));
