import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  InputDate,
  InputTime,
  Text,
} from '@bufferapp/components';
import styles from './style.css';

const renderTimezoneLabel = timezoneLabel =>
  <div className={styles.timezoneLabel}>
    <Text>{timezoneLabel}</Text>
  </div>;

const DateTimeForm = ({
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
    <div className={styles.time}>
      <Field name={'time'} component={InputTime} />
    </div>
    <div className={styles.submitButton}>
      <Button
        onClick={handleSubmit}
        disabled={submitting}
      >
          Schedule
      </Button>
    </div>
    { timezoneLabel ? renderTimezoneLabel(timezoneLabel) : null }
  </form>;

DateTimeForm.propTypes = {
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
