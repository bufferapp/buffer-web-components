import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import {
  reducer as formReducer,
  SubmissionError,
} from 'redux-form';
import { createStore, combineReducers } from 'redux';
import DateTimeForm from './index';

describe('DateTimeForm', () => {
  it('should render an error when in error state', () => {
    const initialValues = {
      date: {
        month: 7,
        day: 21,
        year: 2015,
      },
      time: {
        hours: 10,
        minutes: 20,
      },
    };
    const initialMonthYear = {
      month: 7,
      year: 2015,
    };
    const store = createStore(combineReducers({ form: formReducer }));
    const error = 'some error';
    const wrapper = mount(
      <Provider store={store}>
        <DateTimeForm
          onSubmit={() => {
            throw new SubmissionError({
              _error: error,
            });
          }}
          initialMonthYear={initialMonthYear}
          initialValues={initialValues}
        />
      </Provider>,
    );
    wrapper
      .find('button')
      .simulate('click');
    expect(wrapper.text())
      .toContain(error);
  });
});
