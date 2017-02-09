import React, { PropTypes } from 'react';
import {
  Image,
  Text,
} from '@bufferapp/components';
import style from './style.css';

const RetweetPanel = ({
  name,
  handle,
  avatarUrl,
}) =>
  <div className={style['retweet-panel-container']}>
    <Image
      src={avatarUrl}
      border={'circle'}
      height={'2em'}
      width={'2em'}
    />
    <div className={style['retweet-handle-container']}>
      <Text size={'small'}>{name}</Text>
      <Text size={'extra-small'}>{handle}</Text>
    </div>
  </div>;

RetweetPanel.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default RetweetPanel;
