import React from 'react';
import PropTypes from 'prop-types';
import {
  borderWidth,
  borderRadius,
} from '@bufferapp/components/style/border';
import { mystic } from '@bufferapp/components/style/color';
import ScheduleTableColumn from './ScheduleTableColumn';

const tableStyle = {
  display: 'flex',
  border: `${borderWidth} solid ${mystic}`,
  borderRadius,
  overflow: 'hidden',
};

const pausedColumnStyle = {
  display: 'flex',
  marginRight: '-1px',
  flexGrow: '1',
  backgroundColor: '#f8f8f8',
  borderLeft: `${borderWidth} solid ${mystic}`,
};

const tableColumnWrapperStyle = {
  display: 'flex',
  marginRight: '-1px',
  flexGrow: '1',
};

const ScheduleTable = ({
  day,
  disabled,
  select24Hours,
  onPauseToggleClick,
}) => (
  <div style={tableStyle}>
    {
      day.map(({
        dayName,
        postingTimesTotal,
        times,
      }) =>
        <div
          key={dayName}
          style={paused ? pausedColumnStyle : tableColumnWrapperStyle}
        >
          <ScheduleTableColumn
            dayName={dayName}
            disabled={disabled}
            postingTimesTotal={postingTimesTotal}
            select24Hours={select24Hours}
            times={times}
            onPauseToggleClick={onPauseToggleClick}
          />
        </div>,
      )
    }
  </div>
);

ScheduleTable.defaultProps = {
  disabled: false,
  select24Hours: false,
};

ScheduleTable.propTypes = {
  day: PropTypes.arrayOf(
    PropTypes.shape({
      dayName: PropTypes.string,
      postingTimesTotal: PropTypes.number,
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
          onRemoveTimeClick: PropTypes.func.isRequired,
        }).isRequired,
      ).isRequired,
    }),
  ).isRequired,
  disabled: PropTypes.bool.isRequired,
  select24Hours: PropTypes.bool.isRequired,
  onPauseToggleClick: PropTypes.func.isRequired,
};

export default ScheduleTable;
