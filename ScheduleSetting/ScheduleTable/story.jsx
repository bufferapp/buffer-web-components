import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
    onRemoveTimeClick: action('on-remove-time-click')
  },
  {
    value: {
      hours: 19,
      minutes: 0,
    },
    onChange: action('on-change'),
    onRemoveTimeClick: action('on-remove-time-click')
  },
];
const singleTime = [
  {
    value: {
      hours: 9,
      minutes: 41,
    },
    onChange: action('on-change'),
    onRemoveTimeClick: action('on-remove-time-click')
  },
];
const noTimes = [];

const days = [];
const pausedDays = [];
const daysSingleTime = [];
const daysNoTimes = [];
const profileId = '12345678';
const onPauseToggleClick = action('on-pause-toggle-click');

daysOfWeek.forEach((dayName) => {
  days.push({
    dayName,
    postingTimesTotal: times.length,
    times,
  });
  pausedDays.push({
    dayName,
    postingTimesTotal: times.length,
    times,
    paused: true,
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

storiesOf('ScheduleTable', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTable
      day={days}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('paused', () => (
    <ScheduleTable
      day={pausedDays}
      disabled
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('disabled', () => (
    <ScheduleTable
      day={days}
      disabled
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('24-hour time setting', () => (
    <ScheduleTable
      day={days}
      select24Hours
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('24-hour time setting, disabled', () => (
    <ScheduleTable
      day={days}
      disabled
      select24Hours
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('single time', () => (
    <ScheduleTable
      day={daysSingleTime}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('no times', () => (
    <ScheduleTable
      day={daysNoTimes}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ));
