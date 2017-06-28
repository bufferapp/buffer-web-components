import React, { PropTypes } from 'react';
import {
  Button,
  Text,
  WarningIcon,
} from '@bufferapp/components';
import {
  borderWidth,
} from '@bufferapp/components/style/border';
import {
  mystic,
} from '@bufferapp/components/style/color';

import PostFooterDelete from '../../../ColabTool/Shared/PostFooterDelete';
import HoverableText from '../../../HoverableText';

const postDetailsStyle = {
  display: 'flex',
  padding: '0.5rem 1rem',
  backgroundColor: '#fcfcfc',
  borderTop: `${borderWidth} solid ${mystic}`,
};

const postActionDetailsStyle = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
};

const postActionDetailsIconStyle = {
  marginRight: '0.5rem',
  display: 'flex',
  alignItems: 'center',
};

const postControlsStyle = {
  display: 'flex',
};

const postButtonEdit = {
  marginLeft: '0.7rem',
};

const verticalLineStyle = {
  marginRight: '0.7rem',
  marginLeft: '0.7rem',
  borderLeft: `${borderWidth} solid transparent`,
};

/* eslint-disable react/prop-types */

const renderEdit = ({
  onEditClick,
}) =>
    <span style={postButtonEdit}>
      <Button onClick={onEditClick} noStyle>
        <HoverableText
          size={'small'}
        >
          Edit
        </HoverableText>
      </Button>
    </span>;

const renderIcon = () =>
      <div style={postActionDetailsIconStyle}>
        <WarningIcon color={'torchRed'} />
      </div>;

const renderShareNow = ({
  onShareNowClick,
}) =>
  <span>
    <span style={verticalLineStyle} />
    <Button onClick={onShareNowClick} noStyle>
      <HoverableText
        size={'small'}
      >
        Share Now
      </HoverableText>
    </Button>
  </span>;

const renderText = ({
  postDetails,
}) =>
  <span>
    <Text
      size={'small'}
      color={postDetails.error ? 'torchRed' : undefined}
    >
      {postDetails.postAction}
    </Text>
  </span>;

const renderControls = ({
  isDeleting,
  isConfirmingDelete,
  isWorking,
  onCancelConfirmClick,
  onDeleteClick,
  onEditClick,
  onDeleteConfirmClick,
  onShareNowClick,
}) => {
  if (isDeleting) {
    return (
      <Text size={'small'}> Deleting... </Text>
    );
  }

  if (isWorking) {
    return (
      <Text size={'small'}> Sharing... </Text>
    );
  }

  return (
    <div>
      <PostFooterDelete
        isConfirmingDelete={isConfirmingDelete}
        onCancelConfirmClick={onCancelConfirmClick}
        onDeleteConfirmClick={onDeleteConfirmClick}
        onDeleteClick={onDeleteClick}
      />
      {renderEdit({
        onEditClick
      })}
      {renderShareNow({
        onShareNowClick,
      })}
    </div>
  );
};

/* eslint-enable react/prop-types */

const DashboardPostFooter = ({
  isDeleting,
  isConfirmingDelete,
  isWorking,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onShareNowClick,
  postDetails,
  sent,
}) =>
  <div style={postDetailsStyle}>
    <div style={postActionDetailsStyle}>
      {postDetails.error && renderIcon()}
      {renderText({ postDetails })}
    </div>
    { !sent && (
      <div style={postControlsStyle}>
        {renderControls({
          isDeleting,
          isConfirmingDelete,
          isWorking,
          onCancelConfirmClick,
          onDeleteClick,
          onEditClick,
          onDeleteConfirmClick,
          onShareNowClick,
        })}
      </div>)
    }
  </div>;

DashboardPostFooter.propTypes = {
  isDeleting: PropTypes.bool,
  isConfirmingDelete: PropTypes.bool,
  isWorking: PropTypes.bool,
  onCancelConfirmClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onDeleteConfirmClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onShareNowClick: PropTypes.func,
  postDetails: PropTypes.shape({
    error: PropTypes.string,
    postAction: PropTypes.string,
  }).isRequired,
  sent: PropTypes.bool.isRequired,
};

DashboardPostFooter.defaultProps = {
  isDeleting: false,
  isConfirmingDelete: false,
  isWorking: false,
};

export default DashboardPostFooter;
