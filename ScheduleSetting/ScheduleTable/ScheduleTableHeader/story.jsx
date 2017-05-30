import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTableHeader from './index';

const dayName = 'Monday';
const postingTimesTotal = 5;

storiesOf('ScheduleTableHeader')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTableHeader
      dayName={dayName}
      postingTimesTotal={postingTimesTotal}
    />
  ));
