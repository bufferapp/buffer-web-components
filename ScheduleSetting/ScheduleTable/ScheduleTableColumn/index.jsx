import React from 'react';
import PropTypes from 'prop-types';
import { borderWidth } from '@bufferapp/components/style/border';
import { aquaHaze, geyser, mystic } from '@bufferapp/components/style/color';
import ScheduleTableHeader from '../ScheduleTableHeader';
import ScheduleTableCell from '../ScheduleTableCell';

const columnHeight = '6.8125rem';

const columnStyle = {
  borderRight: `${borderWidth} solid ${mystic}`,
  flexGrow: '1',
  minHeight: columnHeight,
  textAlign: 'center',
};

const columnNoTimesStyle = {
  backgroundColor: aquaHaze,
  borderRight: `${borderWidth} solid ${mystic}`,
  color: geyser,
  flexGrow: '1',
  minHeight: columnHeight,
  textAlign: 'center',
};

const ScheduleTableColumn = ({
  dayName,
  disabled,
  select24Hours,
  times,
}) => (
  <div style={(times.length === 0) ? columnNoTimesStyle : columnStyle}>
    <ScheduleTableHeader
      dayName={dayName}
      postingTimesTotal={times.length}
    />
    {
      times.map((time, index) =>
        <ScheduleTableCell
          disabled={disabled}
          key={index}
          select24Hours={select24Hours}
          time={time}
        />,
      )
    }
  </div>
  );

ScheduleTableColumn.defaultProps = {
  disabled: false,
  select24Hours: false,
};

ScheduleTableColumn.propTypes = {
  dayName: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  select24Hours: PropTypes.bool.isRequired,
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
