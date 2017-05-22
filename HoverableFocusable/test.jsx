import React from 'react';
import { mount } from 'enzyme';
import {
  Button,
} from '@bufferapp/components';
import HoverableFocusable from './index';

describe('DateTimeForm', () => {
  it('should toggle hovered prop when mouseEnter and mouseLeave are triggered', () => {
    const wrapper = mount(
      <HoverableFocusable>
        <Button>Hi</Button>
      </HoverableFocusable>,
    );
    const button = wrapper
      .find(Button);
    button.simulate('mouseEnter');
    expect(button.props().hovered)
      .toBe(true);
    button.simulate('mouseLeave');
    expect(button.props().hovered)
      .toBe(false);
  });

  it('should toggle focused prop when focus and blur are triggered', () => {
    const wrapper = mount(
      <HoverableFocusable>
        <Button>Hi</Button>
      </HoverableFocusable>,
    );
    const button = wrapper
      .find(Button);
    button.simulate('focus');
    expect(button.props().focused)
      .toBe(true);
    button.simulate('blur');
    expect(button.props().focused)
      .toBe(false);
  });
});
