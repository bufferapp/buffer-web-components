import React from 'react';
import PropTypes from 'prop-types';
import { borderWidth } from '@bufferapp/components/style/border';
import {
  mystic,
  outerSpace,
} from '@bufferapp/components/style/color';
import {
  fontFamily,
  fontSizeSmall,
  fontWeight,
} from '@bufferapp/components/style/font';

const collectiveHeight = '2.75rem';

const headerStyle = {
  borderBottom: `${borderWidth} solid ${mystic}`,
  color: outerSpace,
  fontFamily,
  fontSize: fontSizeSmall,
  fontWeight,
  height: collectiveHeight,
  lineHeight: collectiveHeight,
};

const ScheduleTableHeader = ({
  dayName,
}) => (
  <div style={headerStyle}>
    {dayName}
  </div>
);

ScheduleTableHeader.propTypes = {
  dayName: PropTypes.string.isRequired,
};

export default ScheduleTableHeader;
