import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CloseIcon,
  InputTime,
} from '@bufferapp/components';
import { boxShadowLevelOne } from '@bufferapp/components/style/dropShadow';
import { calculateStyles } from '@bufferapp/components/lib/utils';
import TableCell from '../../../TableCell';

/* eslint-disable react/prop-types */
const TableCellContents = ({
  hovered,
  time,
}) => {
  const style = calculateStyles({
    default: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '0.5rem',
      paddingTop: '0.5rem',
      position: 'relative',
    },
    hovered: {
      boxShadow: boxShadowLevelOne,
    },
  }, {
    hovered,
  });

  const buttonStyle = calculateStyles({
    default: {
      display: 'flex',
      left: '0.5rem',
      position: 'absolute',
    },
  });

  return (
    <div style={style}>
      { hovered ?
        <div style={buttonStyle}>
          <Button noStyle>
            <CloseIcon />
          </Button>
        </div>
        :
        null
      }
      <InputTime
        input={time}
        noStyle
      />
    </div>
  );
};
/* eslint-enable react/prop-types */

const ScheduleTableCell = ({ time }) => (
  <TableCell>
    <TableCellContents time={time} />
  </TableCell>
  );

ScheduleTableCell.propTypes = {
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
