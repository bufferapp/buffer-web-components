import React from 'react';
import PropTypes from 'prop-types';
import { borderWidth } from '@bufferapp/components/style/border';
import { mystic } from '@bufferapp/components/style/color';
import { Text, Button } from '@bufferapp/components';

const headerStyle = {
  paddingTop: '1rem',
  paddingBottom: '1rem',
  borderBottom: `${borderWidth} solid ${mystic}`,
};

const ScheduleTableHeader = ({
  dayName,
  paused,
  onPauseToggleClick,
}) => (
  <div style={headerStyle}>
    <Text
      color={'outerSpace'}
      size={'small'}
    >
      {dayName}
    </Text>
    <Button linkStyle onClick={() => onPauseToggleClick(dayName, paused)}>
      {`Turn ${paused ? 'on' : 'off'}`}
    </Button>
  </div>
);

ScheduleTableHeader.propTypes = {
  dayName: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired,
  onPauseToggleClick: PropTypes.func.isRequired,
};

export default ScheduleTableHeader;
