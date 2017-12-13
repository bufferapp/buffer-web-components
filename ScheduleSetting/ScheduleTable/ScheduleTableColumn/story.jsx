import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
const timesSingle = [
  {
    value: {
      hours: 9,
      minutes: 41,
    },
    onChange: action('on-change'),
    onRemoveTimeClick: action('on-remove-time-click')
  },
];

const timesEmpty = [];
const profileId = '12345678';
const onPauseToggleClick = action('on-pause-toggle-click');

storiesOf('ScheduleTableColumn', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTableColumn
      dayName={dayName}
      times={times}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('disabled', () => (
    <ScheduleTableColumn
      dayName={dayName}
      disabled
      times={times}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('paused', () => (
    <ScheduleTableColumn
      dayName={dayName}
      disabled
      paused
      times={times}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('24-hour time setting', () => (
    <ScheduleTableColumn
      dayName={dayName}
      select24Hours
      times={times}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('24-hour time setting, disabled', () => (
    <ScheduleTableColumn
      dayName={dayName}
      disabled
      select24Hours
      times={times}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('single time', () => (
    <ScheduleTableColumn
      dayName={dayName}
      times={timesSingle}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('without times', () => (
    <ScheduleTableColumn
      dayName={dayName}
      times={timesEmpty}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ));
