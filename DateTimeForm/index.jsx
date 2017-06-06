import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  InputDate,
  InputTime,
  Text,
} from '@bufferapp/components';

const formItemStyle = {
  marginTop: '1.5rem',
  textAlign: 'center',
};

const timezoneStyle = {
  marginTop: '0.5rem',
};

const buttonStyle = {
  ...formItemStyle,
  marginTop: '1.4rem',
};

const renderTimezoneLabel = timezoneLabel =>
  <div style={timezoneStyle}>
    <Text size={'small'}>{timezoneLabel}</Text>
  </div>;

const renderError = error =>
  <div style={formItemStyle}>
    <Text color={'torchRed'}>{error}</Text>
  </div>;

const DateTimeForm = ({
  error,
  handleSubmit,
  submitting,
  timezoneLabel,
  initialMonthYear,
  disableBefore,
}) =>
  <form>
    <div>
      <Field
        name={'date'}
        component={InputDate}
        disableBefore={disableBefore}
        initialMonthYear={initialMonthYear}
      />
    </div>
    <div style={formItemStyle}>
      <Field name={'time'} component={InputTime} />
      { timezoneLabel ? renderTimezoneLabel(timezoneLabel) : null }
    </div>
    { error ? renderError(error) : null }
    <div style={buttonStyle}>
      <Button
        onClick={handleSubmit}
        disabled={submitting}
        small
      >
          Schedule
      </Button>
    </div>
  </form>;

DateTimeForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  timezoneLabel: PropTypes.string,
  initialMonthYear: PropTypes.shape({
    month: PropTypes.number,
    year: PropTypes.number,
  }).isRequired,
  disableBefore: PropTypes.shape({
    month: PropTypes.number,
    year: PropTypes.number,
  }),
};

export default reduxForm({
  form: 'date-time',
})(DateTimeForm);
