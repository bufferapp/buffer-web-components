import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTableHeader from './index';

const dayName = 'Monday';
const profileId = '12345678';
const onPauseToggleClick = action('on-pause-toggle-click');

storiesOf('ScheduleTableHeader')
  .addDecorator(checkA11y)
  .add('default unpaused', () => (
    <ScheduleTableHeader
      dayName={dayName}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
    />
  ))
  .add('paused', () => (
    <ScheduleTableHeader
      dayName={dayName}
      onPauseToggleClick={onPauseToggleClick}
      profileId={profileId}
      paused
    />
  ));
