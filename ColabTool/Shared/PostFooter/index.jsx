import React, { PropTypes } from 'react';
import {
  Button,
  Text,
  ClockIcon,
  WarningIcon,
} from '@bufferapp/components';
import style from './style.css';

/* eslint-disable react/prop-types */

const renderConfirmDelete = ({
  onCancelConfirmClick,
}) =>
  <span className={style['post-cancel-delete']}>
    <Button onClick={onCancelConfirmClick} noStyle>
      <Text size={'small'}>Cancel</Text>
    </Button>
  </span>;


const renderDeleteButton = ({
  isConfirmingDelete,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span className={style['post-button']}>
    <Button onClick={isConfirmingDelete ? onDeleteConfirmClick : onDeleteClick} noStyle>
      <Text size={'small'} color={isConfirmingDelete ? 'red' : undefined}>
        {isConfirmingDelete ? 'Confirm' : 'Delete'}
      </Text>
    </Button>
  </span>;

const renderDelete = ({
  isConfirmingDelete,
  onCancelConfirmClick,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span>
    {isConfirmingDelete ?
      renderConfirmDelete({ onCancelConfirmClick }) :
      undefined
    }
    {renderDeleteButton({
      isConfirmingDelete,
      onDeleteConfirmClick,
      onDeleteClick,
    })}
  </span>;

const renderEdit = ({ onEditClick }) =>
  <span className={style['post-button-last']}>
    <Button onClick={onEditClick} noStyle>
      <Text size={'small'}>Edit</Text>
    </Button>
  </span>;

const renderApproval = ({
  isPastDue,
  onApproveClick,
  onRescheduleClick,
  manager,
}) => {
  if (isPastDue) {
    return (<span className={style['post-button-last']}>
      <span className={style['vertical-line']} />
      <Button onClick={onRescheduleClick} noStyle>
        <Text size={'small'} color={'blue'}>Reschedule</Text>
      </Button>
    </span>);
  }

  if (manager) {
    return (<span className={style['post-button-last']}>
      <span className={style['vertical-line']} />
      <Button onClick={onApproveClick} noStyle>
        <Text size={'small'} color={'blue'}>Approve</Text>
      </Button>
    </span>);
  }
  return null;
};

const renderIcon = isPastDue => (isPastDue ? <WarningIcon color={'torchRed'} /> : <ClockIcon />);

const renderText = ({
  draftDetails,
  isPastDue,
}) =>
  <span className={style['post-action']}>
    <Text size={'small'} color={isPastDue ? 'red' : undefined}>{draftDetails.postAction}</Text>
    {isPastDue ? <Text size={'small'}> - Please reschedule or delete.</Text> : null}
  </span>;

const renderControls = ({
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
  onRescheduleClick,
}) => {
  if (isDeleting) {
    return (
      <Text size={'small'}> Deleting... </Text>
    );
  } else if (manager && isWorking) {
    return (
      <Text size={'small'}> Approving... </Text>
    );
  }

  return (
    <div>
      {renderDelete({
        isConfirmingDelete,
        onCancelConfirmClick,
        onDeleteConfirmClick,
        onDeleteClick,
      })}
      {renderEdit({
        onEditClick,
      })}
      {renderApproval({
        isPastDue,
        onApproveClick,
        onRescheduleClick,
        manager,
      })}
    </div>
  );
};

/* eslint-enable react/prop-types */

const PostFooter = ({
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
  onRescheduleClick,
  draftDetails,
}) =>
  <div className={style['post-details']}>
    <div className={style['post-action-details']}>
      {renderIcon(isPastDue)}
      {renderText({ draftDetails, isPastDue })}
    </div>
    <div className={style['post-controls']}>
      {renderControls({
        isDeleting,
        isConfirmingDelete,
        isPastDue,
        isWorking,
        manager,
        onApproveClick,
        onCancelConfirmClick,
        onDeleteClick,
        onEditClick,
        onRescheduleClick,
        onDeleteConfirmClick,
      })}
    </div>
  </div>;

PostFooter.propTypes = {
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
  onRescheduleClick: PropTypes.func,
  draftDetails: PropTypes.shape({
    userName: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    createdAt: PropTypes.string,
    via: PropTypes.string,
    postAction: PropTypes.string,
  }).isRequired,
};

PostFooter.defaultProps = {
  isDeleting: false,
  isConfirmingDelete: false,
  isPastDue: false,
  isWorking: false,
};

export default PostFooter;
