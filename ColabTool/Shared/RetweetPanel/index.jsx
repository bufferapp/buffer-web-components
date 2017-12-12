import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
} from '@bufferapp/components';

const retweetPanelContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const retweetHandleContainer = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1rem',
};

const RetweetPanel = ({
  name,
  handle,
  avatarUrl,
}) =>
  <div style={retweetPanelContainerStyle}>
    <Image
      src={avatarUrl}
      border={'circle'}
      height={'2rem'}
      width={'2rem'}
    />
    <div style={retweetHandleContainer}>
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
