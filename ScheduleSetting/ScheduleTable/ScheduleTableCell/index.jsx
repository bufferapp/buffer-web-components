import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CloseSmallIcon,
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
      position: 'relative',
      display: 'flex',
      height: cellHeight,
      lineHeight: cellHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const buttonStyle = calculateStyles({
    default: {
      position: 'absolute',
      right: '0.5rem',
      display: 'flex',
      width: '0.59rem',
      height: '0.59rem',
      textAlign: 'center',
    },
  });

  let removeButton = '';

  if(hovered && !disabled){
    removeButton = <div style={buttonStyle}>
                    <Button onClick={time.onRemoveTimeClick} noStyle><CloseSmallIcon size={small} /></Button>
                  </div>;
  }

  return (
    <div style={style}>
      {removeButton}
      <InputTime
        disabled={disabled}
        input={time}
        noStyle
        select24Hours={select24Hours}
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
    <TableCellContents
      disabled={disabled}
      select24Hours={select24Hours}
      time={time}
    />
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
    onRemoveTimeClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default ScheduleTableCell;
