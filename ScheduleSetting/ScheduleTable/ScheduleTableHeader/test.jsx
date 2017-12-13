import React from 'react';
import { mount } from 'enzyme';
import ScheduleTableHeader from './index';

it('should trigger onPauseToggleClick', () => {
  const onPauseToggleClick = jest.fn();
  const wrapper = mount(
    <ScheduleTableHeader
      dayName={'Monday'}
      onPauseToggleClick={onPauseToggleClick}
      profileId={'12345678'}
    />,
  );

  // click on the Turn on/off button
  wrapper
    .find('button')
    .at(0)
    .simulate('click');
  expect(onPauseToggleClick)
    .toBeCalled();
});
