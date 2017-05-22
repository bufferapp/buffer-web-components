import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  InputDate,
  InputTime,
  Text,
} from '@bufferapp/components';
import HoverableFocusable from '../HoverableFocusable';

const formItemStyle = {
  marginTop: '1rem',
  textAlign: 'center',
};

const renderTimezoneLabel = timezoneLabel =>
  <div style={formItemStyle}>
    <Text>{timezoneLabel}</Text>
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
    </div>
    { error ? renderError(error) : null }
    <div style={formItemStyle}>
      <HoverableFocusable>
        <Button
          onClick={handleSubmit}
          disabled={submitting}
        >
            Schedule
        </Button>
      </HoverableFocusable>
    </div>
    { timezoneLabel ? renderTimezoneLabel(timezoneLabel) : null }
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
