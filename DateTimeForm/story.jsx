import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {
  reducer as formReducer,
  SubmissionError,
} from 'redux-form';
import { checkA11y } from 'storybook-addon-a11y';
import DateTimeForm from './index';
import moment from 'moment';

const firstMonthToDisplay = moment('2015-08-01').toDate();

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

storiesOf('DateTimeForm', module)
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
      firstMonthToDisplay={firstMonthToDisplay}
    />
  ))
  .add('with timezone label', () => (
    <DateTimeForm
      initialMonthYear={initialMonthYear}
      initialValues={initialValues}
      onSubmit={action('on-submit')}
      timezoneLabel={'Europe: London'}
      firstMonthToDisplay={firstMonthToDisplay}
    />
  ))
  .add('with some dates disabled', () => (
    <DateTimeForm
      onSubmit={action('on-submit')}
      initialMonthYear={initialMonthYear}
      initialValues={initialValues}
      disableBefore={disableBefore}
      firstMonthToDisplay={firstMonthToDisplay}
    />
  ))
  .add('with error', () => (
    <DateTimeForm
      onSubmit={() => {
        throw new SubmissionError({
          _error: 'Oops! You need to schedule your update for some time in the future!',
        });
      }}
      initialMonthYear={initialMonthYear}
      initialValues={initialValues}
      firstMonthToDisplay={firstMonthToDisplay}
    />
  ))
  .add('with submitting delay', () => (
    <DateTimeForm
      onSubmit={() => new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      })}
      initialMonthYear={initialMonthYear}
      initialValues={initialValues}
      firstMonthToDisplay={firstMonthToDisplay}
    />
  ))
  .add('with 24 hour time selector', () => (
    <DateTimeForm
      onSubmit={action('on-submit')}
      initialMonthYear={initialMonthYear}
      initialValues={initialValues}
      firstMonthToDisplay={firstMonthToDisplay}
      select24Hours
    />
  ))
  .add('with first day of week monday', () => (
    <DateTimeForm
      onSubmit={action('on-submit')}
      initialMonthYear={initialMonthYear}
      initialValues={initialValues}
      firstMonthToDisplay={firstMonthToDisplay}
      firstDayOfWeek={1}
    />
  ));
