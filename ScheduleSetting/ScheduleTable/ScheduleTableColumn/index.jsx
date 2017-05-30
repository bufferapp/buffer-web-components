import React from 'react';
import PropTypes from 'prop-types';
import { borderWidth } from '@bufferapp/components/style/border';
import { aquaHaze, geyser, mystic } from '@bufferapp/components/style/color';
import ScheduleTableHeader from '../ScheduleTableHeader';
import ScheduleTableCell from '../ScheduleTableCell';

const columnStyle = {
  borderRight: `${borderWidth} solid ${mystic}`,
  flexGrow: '1',
  minHeight: '7.1875rem',
  textAlign: 'center',
};

const columnNoTimesStyle = {
  backgroundColor: aquaHaze,
  borderRight: `${borderWidth} solid ${mystic}`,
  color: geyser,
  flexGrow: '1',
  minHeight: '7.1875rem',
  textAlign: 'center',
};

const ScheduleTableColumn = ({
  dayName,
  times,
}) => {
  return (
    <div style={(times.length === 0) ? columnNoTimesStyle : columnStyle}>
      <ScheduleTableHeader
        dayName={dayName}
        postingTimesTotal={times.length}
      />
      {
        times.map((time, index) => <ScheduleTableCell time={time} key={index} />)
      }
    </div>
  );
};

ScheduleTableColumn.propTypes = {
  dayName: PropTypes.string.isRequired,
  times: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.shape({
          hours: PropTypes.number.isRequired,
          minutes: PropTypes.number.isRequired,
        }),
        PropTypes.string,
      ]),
      onChange: PropTypes.func.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ScheduleTableColumn;
