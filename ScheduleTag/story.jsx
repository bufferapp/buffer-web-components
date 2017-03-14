import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTag from './index';

const date = '08:52am (GMC)';

storiesOf('ScheduleTag')
  .addDecorator(checkA11y)
  .add('Default', () => (
    <ScheduleTag dateString={date} />
  ));
