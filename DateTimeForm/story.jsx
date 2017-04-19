import React from 'react';
import {
  action,
  storiesOf,
} from '@kadira/storybook';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { checkA11y } from 'storybook-addon-a11y';
import DateTimeForm from './index';

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

const disableBefore = {
  day: 21,
  month: 7,
  year: 2015,
};

const store = createStore(combineReducers({ form: formReducer }));

storiesOf('DateTimeForm')
  .addDecorator(checkA11y)
  .addDecorator(getStory =>
    <Provider store={store}>
      {getStory()}
    </Provider>,
  )
  .add('default', () => (
    <DateTimeForm
      onSubmit={action('on-submit')}
      initialMonthYear={initialMonthYear}
      initialValues={initialValues}
    />
  ))
  .add('with timezone label', () => (
    <DateTimeForm
      initialMonthYear={initialMonthYear}
      initialValues={initialValues}
      onSubmit={action('on-submit')}
      timezoneLabel={'Europe: London'}
    />
  ))
  .add('with some dates disabled', () => (
    <DateTimeForm
      onSubmit={action('on-submit')}
      initialMonthYear={initialMonthYear}
      initialValues={initialValues}
      disableBefore={disableBefore}
    />
  ));
