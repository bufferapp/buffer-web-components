import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleSettingHeader from './index';

const profileName = 'Buffer Admin';
const profileService = 'Twitter';
const profileServiceType = 'Profile';
const timezoneOptions = [
  'London',
  'New York',
  'San Francisco',
  'Tokyo',
];

storiesOf('ScheduleSettingHeader')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleSettingHeader
      profileName={profileName}
      profileService={profileService}
      profileServiceType={profileServiceType}
      timezoneOptions={timezoneOptions}
    />
  ));
