import React from 'react';
import PropTypes from 'prop-types';
import {
  borderWidth,
  borderRadius,
} from '@bufferapp/components/style/border';
import { mystic } from '@bufferapp/components/style/color';
import ScheduleTableColumn from './ScheduleTableColumn';

const tableStyle = {
  border: `${borderWidth} solid ${mystic}`,
  borderRadius,
  display: 'flex',
};

const tableColumnWrapper = {
  display: 'flex',
  flexGrow: '1',
};

const ScheduleTable = ({
  day,
}) => (
  <div style={tableStyle}>
    {
      day.map(({
        dayName,
        postingTimesTotal,
        times,
      }) =>
        <div key={dayName} style={tableColumnWrapper}>
          <ScheduleTableColumn
            dayName={dayName}
            postingTimesTotal={postingTimesTotal}
            times={times}
          />
        </div>,
      )
    }
  </div>
);

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
        }).isRequired,
      ).isRequired,
    }),
  ).isRequired,
};

export default ScheduleTable;
