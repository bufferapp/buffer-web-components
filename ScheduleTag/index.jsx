import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@bufferapp/components';
import {
  curiousBlue,
  transparent,
} from '@bufferapp/components/style/color';
import {
  borderRadius,
} from '@bufferapp/components/style/border';

const ScheduleTag = ({ dateString }) =>
  <span
    style={{
      position: 'relative',
      backgroundColor: curiousBlue,
      padding: '0.25rem 0.25rem 0.4rem 0.75rem',
      display: 'inline-block',
      borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
    }}
  >
    <Text
      size={'extra-small'}
      weight={'thin'}
      color={'white'}
    >
      {dateString}
    </Text>
    <span
      style={{
        position: 'absolute',
        right: '-1rem',
        width: 0,
        height: 0,
        top: 0,
        borderTop: `1rem solid ${transparent}`,
        borderBottom: `1rem solid ${transparent}`,
        borderLeft: `1rem solid ${curiousBlue}`,
      }}
    />
  </span>;

ScheduleTag.propTypes = {
  dateString: PropTypes.string.isRequired,
};

export default ScheduleTag;
