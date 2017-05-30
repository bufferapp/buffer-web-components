import React from 'react';
import PropTypes from 'prop-types';
import { borderWidth } from '@bufferapp/components/style/border';
import { mystic } from '@bufferapp/components/style/color';
import { Text } from '@bufferapp/components';

const headerStyle = {
  borderBottom: `${borderWidth} solid ${mystic}`,
  padding: '0.25rem',
};

const ScheduleTableHeader = ({
  dayName,
  postingTimesTotal,
}) => (
  <div style={headerStyle}>
    <Text color={'outerSpace'} size={'small'} weight={'bold'}>{dayName}</Text><br />
    <Text size={'small'}>{postingTimesTotal} Posting Times</Text>
  </div>
);

ScheduleTableHeader.propTypes = {
  dayName: PropTypes.string.isRequired,
  postingTimesTotal: PropTypes.number.isRequired,
};

export default ScheduleTableHeader;
