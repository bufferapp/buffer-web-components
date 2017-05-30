import React from 'react';
import {
  action,
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTable from './index';

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

const days = [
  {
    dayName: 'Monday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Tuesday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Wednesday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Thursday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Friday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Saturday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Sunday',
    postingTimesTotal: times.length,
    times,
  },
];

const withSingleTime = [
  {
    dayName: 'Monday',
    postingTimesTotal: timesSingle.length,
    times: timesSingle,
  },
  {
    dayName: 'Tuesday',
    postingTimesTotal: timesSingle.length,
    times: timesSingle,
  },
  {
    dayName: 'Wednesday',
    postingTimesTotal: timesSingle.length,
    times: timesSingle,
  },
  {
    dayName: 'Thursday',
    postingTimesTotal: timesSingle.length,
    times: timesSingle,
  },
  {
    dayName: 'Friday',
    postingTimesTotal: timesSingle.length,
    times: timesSingle,
  },
  {
    dayName: 'Saturday',
    postingTimesTotal: timesSingle.length,
    times: timesSingle,
  },
  {
    dayName: 'Sunday',
    postingTimesTotal: timesSingle.length,
    times: timesSingle,
  },
];

const withoutTimes = [
  {
    dayName: 'Monday',
    postingTimesTotal: timesEmpty.length,
    times: timesEmpty,
  },
  {
    dayName: 'Tuesday',
    postingTimesTotal: timesEmpty.length,
    times: timesEmpty,
  },
  {
    dayName: 'Wednesday',
    postingTimesTotal: timesEmpty.length,
    times: timesEmpty,
  },
  {
    dayName: 'Thursday',
    postingTimesTotal: timesEmpty.length,
    times: timesEmpty,
  },
  {
    dayName: 'Friday',
    postingTimesTotal: timesEmpty.length,
    times: timesEmpty,
  },
  {
    dayName: 'Saturday',
    postingTimesTotal: timesEmpty.length,
    times: timesEmpty,
  },
  {
    dayName: 'Sunday',
    postingTimesTotal: timesEmpty.length,
    times: timesEmpty,
  },
];

const someWithoutTimes = [
  {
    dayName: 'Monday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Tuesday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Wednesday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Thursday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Friday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Saturday',
    postingTimesTotal: timesEmpty.length,
    times: timesEmpty,
  },
  {
    dayName: 'Sunday',
    postingTimesTotal: timesEmpty.length,
    times: timesEmpty,
  },
];

storiesOf('ScheduleTable')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTable day={days} />
  ))
  .add('with a single time', () => (
    <ScheduleTable day={withSingleTime} />
  ))
  .add('without any times', () => (
    <ScheduleTable day={withoutTimes} />
  ))
  .add('some days without times', () => (
    <ScheduleTable day={someWithoutTimes} />
  ));
