import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CloseIcon,
  InputTime,
} from '@bufferapp/components';
import { calculateStyles } from '@bufferapp/components/lib/utils';
import TableCell from '../../../TableCell';

/* eslint-disable react/prop-types */
const TableCellContents = ({
  disabled,
  hovered,
  select24Hours,
  time,
}) => {
  const cellHeight = '2rem';

  const style = calculateStyles({
    default: {
      alignItems: 'center',
      display: 'flex',
      height: cellHeight,
      justifyContent: 'center',
      lineHeight: cellHeight,
      position: 'relative',
    },
  });

  const buttonStyle = calculateStyles({
    default: {
      display: 'flex',
      right: '0.5rem',
      position: 'absolute',
    },
  });

  if (disabled && hovered && select24Hours) {
    return (
      <div style={style}>
        <InputTime
          disabled
          input={time}
          noStyle
          select24Hours
        />
      </div>
    );
  } else if (disabled && !hovered && select24Hours) {
    return (
      <div style={style}>
        <InputTime
          disabled
          input={time}
          noStyle
          select24Hours
        />
      </div>
    );
  } else if (!disabled && hovered && select24Hours) {
    return (
      <div style={style}>
        <div style={buttonStyle}>
          <Button noStyle>
            <CloseIcon />
          </Button>
        </div>
        <InputTime
          input={time}
          noStyle
          select24Hours
        />
      </div>
    );
  } else if (!disabled && !hovered && select24Hours) {
    return (
      <div style={style}>
        <InputTime
          input={time}
          noStyle
          select24Hours
        />
      </div>
    );
  } else if (disabled && hovered && !select24Hours) {
    return (
      <div style={style}>
        <InputTime
          disabled
          input={time}
          noStyle
        />
      </div>
    );
  } else if (disabled && !hovered && !select24Hours) {
    return (
      <div style={style}>
        <InputTime
          disabled
          input={time}
          noStyle
        />
      </div>
    );
  } else if (!disabled && hovered && !select24Hours) {
    return (
      <div style={style}>
        <div style={buttonStyle}>
          <Button noStyle>
            <CloseIcon />
          </Button>
        </div>
        <InputTime
          input={time}
          noStyle
        />
      </div>
    );
  }

  return (
    <div style={style}>
      <InputTime
        input={time}
        noStyle
      />
    </div>
  );
};
/* eslint-enable react/prop-types */

const ScheduleTableCell = ({
  disabled,
  select24Hours,
  time,
}) => (
  <TableCell>
    <TableCellContents disabled={disabled} select24Hours={select24Hours} time={time} />
  </TableCell>
  );

ScheduleTableCell.defaultProps = {
  disabled: false,
  select24Hours: false,
};

ScheduleTableCell.propTypes = {
  disabled: PropTypes.bool.isRequired,
  select24Hours: PropTypes.bool.isRequired,
  time: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.shape({
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
      }),
      PropTypes.string,
    ]),
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default ScheduleTableCell;
