import React, { PropTypes } from 'react';
import {
  SectionHeader,
  Select,
  Text,
} from '@bufferapp/components';

const textStyle = {
  flexGrow: 1,
};

const serviceStyle = {
  textTransform: 'capitalize',
};

const timezoneStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
};

const timezoneItemStyle = {
  marginRight: '0.5rem',
};

const ScheduleSettingHeader = ({
  profileName,
  profileService,
  profileServiceType,
  timezoneOptions,
}) => (
  <SectionHeader>
    <span className={textStyle}>
      <Text>
        Posting schedule for the <strong>{profileName}</strong>
        <span className={serviceStyle}> {profileService} {profileServiceType}</span>
      </Text>
    </span>
    <span className={timezoneStyle}>
      <span className={timezoneItemStyle}>
        <Text size={'small'}>Schedule Timezone:</Text>
      </span>
      <span className={timezoneItemStyle}>
        <Select options={timezoneOptions} />
      </span>
    </span>
  </SectionHeader>
);

ScheduleSettingHeader.propTypes = {
  profileName: PropTypes.string.isRequired,
  profileService: PropTypes.string.isRequired,
  profileServiceType: PropTypes.string.isRequired,
  timezoneOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ScheduleSettingHeader;
