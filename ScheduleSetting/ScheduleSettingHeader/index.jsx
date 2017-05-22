import React, { PropTypes } from 'react';
import {
  SectionHeader,
  Select,
  Text,
} from '@bufferapp/components';
import style from './style.css';

const ScheduleSettingHeader = ({
  profileName,
  profileService,
  profileServiceType,
  timezoneOptions,
}) => (
  <SectionHeader>
    <span className={style.text}>
      <Text>
        Posting schedule for the <strong>{profileName}</strong>
        <span className={style.service}> {profileService} {profileServiceType}</span>
      </Text>
    </span>
    <span className={style.timezone}>
      <span className={style.timezoneItem}>
        <Text size={'small'}>Schedule Timezone:</Text>
      </span>
      <span className={style.timezoneItem}>
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
