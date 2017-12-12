import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTableHeader from './index';

const dayName = 'Monday';

storiesOf('ScheduleTableHeader')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTableHeader
      dayName={dayName}
    />
  ));
