import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleSettingHeader from './index';

const profileName = 'Buffer Admin';
const profileService = 'Twitter';
const profileServiceType = 'Profile';
const timezoneOptions = [
  { name: 'London', value: 'London' },
  { name: 'New York', value: 'New York' },
  { name: 'San Francisco', value: 'San Francisco' },
  { name: 'Tokyo', value: 'Tokyo' },
];

storiesOf('ScheduleSettingHeader', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleSettingHeader
      profileName={profileName}
      profileService={profileService}
      profileServiceType={profileServiceType}
      timezoneOptions={timezoneOptions}
    />
  ));
