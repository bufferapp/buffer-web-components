import React, { PropTypes } from 'react';
import {
  Button,
  Text,
  ClockIcon,
  WarningIcon,
} from '@bufferapp/components';
import PostFooterDelete from '../PostFooterDelete';
import PostFooterApproval from '../PostFooterApproval';
import style from './style.css';

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
    <span className={style['post-button-edit']}>
      <Button onClick={onEditClick} noStyle>
        <Text size={'small'}>Edit</Text>
      </Button>
    </span>
  );
};

const renderIcon = isPastDue => (isPastDue ? <WarningIcon color={'torchRed'} /> : <ClockIcon />);

const renderMoveToDrafts = ({
  hasPermission,
  manager,
  onMoveToDraftsClick,
  view,
}) => {
  if (view !== 'approval' || !hasPermission) return;

  return (<span>
    <span className={style['vertical-line']} />
    <Button onClick={onMoveToDraftsClick} noStyle>
      <Text size={'small'} color={'blue'}> Move to Drafts </Text>
    </Button>
  </span>);
};

const renderText = ({
  draftDetails,
  isPastDue,
  view,
}) =>
  <span className={style['post-action']}>
    <Text size={'small'} color={isPastDue ? 'red' : undefined}>{draftDetails.postAction}</Text>
    {
      isPastDue && view === 'drafts' ?
        <Text size={'small'}> - Please reschedule or delete.</Text>
      : null
    }
  </span>;

const renderControls = ({
  hasPermission,
  isDeleting,
  isConfirmingDelete,
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
  const workingCopy = view === 'drafts' ? 'Adding...' : 'Approving...';

  if (isDeleting) {
    return (
      <Text size={'small'}> Deleting... </Text>
    );
  } else if (manager && isWorking) {
    return (
      <Text size={'small'}>{workingCopy}</Text>
    );
  } else if (isWorking) {
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
  draftDetails,
  view,
}) =>
  <div className={style['post-details']}>
    <div className={style['post-action-details']}>
      {renderIcon(isPastDue)}
      {renderText({ draftDetails, isPastDue, view })}
    </div>
    <div className={style['post-controls']}>
      {renderControls({
        hasPermission,
        isDeleting,
        isConfirmingDelete,
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
  view: PropTypes.string.isRequired,
};

PostFooter.defaultProps = {
  isDeleting: false,
  isConfirmingDelete: false,
  isPastDue: false,
  isWorking: false,
};

export default PostFooter;
