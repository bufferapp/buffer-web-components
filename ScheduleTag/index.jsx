import React, { PropTypes } from 'react';
import { Text } from '@bufferapp/components';
import styles from './style.css';

const ScheduleTag = ({ dateString }) => {
  return (
    <span className={styles.scheduleTag}>
        <Text size={'extra-small'} weight={'thin'} color={'white'}>{dateString}</Text>
        <span className={styles.arrow}>
        </span>
    </span>
  );
};

ScheduleTag.propTypes = {
  dateString: PropTypes.string.isRequired,
};

export default ScheduleTag;