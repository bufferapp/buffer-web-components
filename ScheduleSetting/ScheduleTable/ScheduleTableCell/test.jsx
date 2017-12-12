import React from 'react';
import { mount } from 'enzyme';
import { action } from '@storybook/react';
import ScheduleTableCell from './index';

const time = {
  value: {
    hours: 9,
    minutes: 41,
  },
  onChange: action('on-change'),
};

describe('ScheduleTableCell', () => {
  it('should toggle hovered prop when mouseEnter and mouseLeave are triggered', () => {
    const wrapper = mount(
      <ScheduleTableCell time={time} />,
    );
    const scheduleTableCell = wrapper
      .find(ScheduleTableCell);
    scheduleTableCell.simulate('mouseEnter');
    expect(wrapper.find('button').length)
      .toBe(1);
    scheduleTableCell.simulate('mouseLeave');
    expect(wrapper.find('button').length)
      .toBe(0);
  });

  it('should toggle hovered prop when mouseEnter and mouseLeave are triggered and using select24Hours config', () => {
    const wrapper = mount(
      <ScheduleTableCell select24Hours time={time} />,
    );
    const scheduleTableCell = wrapper
      .find(ScheduleTableCell);
    scheduleTableCell.simulate('mouseEnter');
    expect(wrapper.find('button').length)
      .toBe(1);
    scheduleTableCell.simulate('mouseLeave');
    expect(wrapper.find('button').length)
      .toBe(0);
  });

  it('shouldn\'t toggle hovered prop when mouseEnter and mouseLeave are triggered when disabled', () => {
    const wrapper = mount(
      <ScheduleTableCell disabled time={time} />,
    );
    const scheduleTableCell = wrapper
      .find(ScheduleTableCell);
    scheduleTableCell.simulate('mouseEnter');
    expect(wrapper.find('button').length)
      .toBe(0);
    scheduleTableCell.simulate('mouseLeave');
    expect(wrapper.find('button').length)
      .toBe(0);
  });

  it('shouldn\'t toggle hovered prop when mouseEnter and mouseLeave are triggered when disabled and using select24Hours config', () => {
    const wrapper = mount(
      <ScheduleTableCell disabled select24Hours time={time} />,
    );
    const scheduleTableCell = wrapper
      .find(ScheduleTableCell);
    scheduleTableCell.simulate('mouseEnter');
    expect(wrapper.find('button').length)
      .toBe(0);
    scheduleTableCell.simulate('mouseLeave');
    expect(wrapper.find('button').length)
      .toBe(0);
  });
});
