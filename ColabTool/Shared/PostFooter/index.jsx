import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Text,
  ClockIcon,
  WarningIcon,
} from '@bufferapp/components';
import {
  borderWidth,
} from '@bufferapp/components/style/border';
import {
  mystic,
} from '@bufferapp/components/style/color';
import PostFooterDelete from '../PostFooterDelete';
import PostFooterApproval from '../PostFooterApproval';
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
  borderLeft: `${borderWidth} solid ${mystic}`,
};

/* eslint-disable react/prop-types */

const renderEdit = ({
  hasPermission,
  manager,
  onEditClick,
  view,
}) => {
  if (!hasPermission) return;
  if (!manager && view === 'approval') return;

  return (
    <span style={postButtonEdit}>
      <Button onClick={onEditClick} noStyle>
        <HoverableText
          size={'small'}
        >
          Edit
        </HoverableText>
      </Button>
    </span>
  );
};

const renderIcon = ({ isPastDue, scheduledAt }) => {
  if (isPastDue) {
    return (
      <div style={postActionDetailsIconStyle}>
        <WarningIcon color={'torchRed'} />
      </div>
    );
  } else if (scheduledAt) {
    return (
      <div style={postActionDetailsIconStyle}>
        <ClockIcon />
      </div>
    );
  }
  return null;
};

const renderMoveToDrafts = ({
  hasPermission,
  onMoveToDraftsClick,
  view,
}) => {
  if (view !== 'approval' || !hasPermission) return;

  return (<span>
    <span style={verticalLineStyle} />
    <Button onClick={onMoveToDraftsClick} noStyle>
      <HoverableText
        size={'small'}
        color={'curiousBlue'}
        hoverColor={'toryBlue'}
      >
        Move to Drafts
      </HoverableText>
    </Button>
  </span>);
};

const renderText = ({
  draftDetails,
  isPastDue,
  view,
  hasPermission,
  manager,
}) =>
  <span>
    <Text
      size={'small'}
      color={isPastDue ? 'torchRed' : undefined}
    >
      {draftDetails.postAction}
    </Text>
    {
      (hasPermission || manager) && isPastDue && view === 'drafts' ?
        <Text size={'small'}> Please reschedule.</Text>
      : null
    }
  </span>;

const renderControls = ({
  hasPermission,
  isDeleting,
  isConfirmingDelete,
  isMoving,
  isPastDue,
  isWorking,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onEditClick,
  onDeleteConfirmClick,
  onMoveToDraftsClick,
  onRescheduleClick,
  onRequestApprovalClick,
  view,
}) => {
  if (isDeleting) {
    return (
      <Text size={'small'}> Deleting... </Text>
    );
  }

  const approvalView = view === 'approval';

  if (approvalView && isMoving) {
    return (
      <Text size={'small'}> Moving... </Text>
    );
  }

  if (manager && isWorking) {
    return (
      <Text size={'small'}>{ approvalView ? 'Approving...' : 'Adding...' }</Text>
    );
  }

  if (!approvalView && isWorking) {
    return (
      <Text size={'small'}> Requesting... </Text>
    );
  }

  return (
    <div>
      { hasPermission &&
        <PostFooterDelete
          isConfirmingDelete={isConfirmingDelete}
          onCancelConfirmClick={onCancelConfirmClick}
          onDeleteConfirmClick={onDeleteConfirmClick}
          onDeleteClick={onDeleteClick}
        />
      }
      {renderEdit({
        hasPermission,
        manager,
        onEditClick,
        view,
      })}
      {renderMoveToDrafts({
        hasPermission,
        manager,
        onMoveToDraftsClick,
        view,
      })}
      <PostFooterApproval
        hasPermission={hasPermission}
        isPastDue={isPastDue}
        onApproveClick={onApproveClick}
        onRequestApprovalClick={onRequestApprovalClick}
        onRescheduleClick={onRescheduleClick}
        manager={manager}
        view={view}
      />
    </div>
  );
};

/* eslint-enable react/prop-types */

const PostFooter = ({
  hasPermission,
  isDeleting,
  isConfirmingDelete,
  isMoving,
  isPastDue,
  isWorking,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onMoveToDraftsClick,
  onRequestApprovalClick,
  onRescheduleClick,
  scheduledAt,
  draftDetails,
  view,
}) =>
  <div style={postDetailsStyle}>
    <div style={postActionDetailsStyle}>
      {renderIcon({ isPastDue, scheduledAt })}
      {renderText({ draftDetails, scheduledAt, isPastDue, view, hasPermission, manager })}
    </div>
    <div style={postControlsStyle}>
      {renderControls({
        hasPermission,
        isDeleting,
        isConfirmingDelete,
        isMoving,
        isPastDue,
        isWorking,
        manager,
        onApproveClick,
        onCancelConfirmClick,
        onDeleteClick,
        onEditClick,
        onMoveToDraftsClick,
        onRequestApprovalClick,
        onRescheduleClick,
        onDeleteConfirmClick,
        view,
      })}
    </div>
  </div>;

PostFooter.propTypes = {
  hasPermission: PropTypes.bool.isRequired,
  isDeleting: PropTypes.bool,
  isConfirmingDelete: PropTypes.bool,
  isMoving: PropTypes.bool,
  isPastDue: PropTypes.bool,
  isWorking: PropTypes.bool,
  manager: PropTypes.bool,
  onApproveClick: PropTypes.func,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onMoveToDraftsClick: PropTypes.func,
  onRequestApprovalClick: PropTypes.func,
  onRescheduleClick: PropTypes.func,
  draftDetails: PropTypes.shape({
    userName: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    createdAt: PropTypes.string,
    via: PropTypes.string,
    postAction: PropTypes.string,
  }).isRequired,
  scheduledAt: PropTypes.number,
  view: PropTypes.string.isRequired,
};

PostFooter.defaultProps = {
  isDeleting: false,
  isConfirmingDelete: false,
  isMoving: false,
  isPastDue: false,
  isWorking: false,
};

export default PostFooter;
