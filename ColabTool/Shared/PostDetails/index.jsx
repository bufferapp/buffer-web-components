import React, { PropTypes } from 'react';
import {
  Button,
  Text,
  ClockIcon,
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
      <Text size={'small'} color={isConfirmingDelete ? 'torchRed' : undefined}>
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
  onApproveClick,
}) =>
  <span className={style['post-button-last']}>
    <span className={style['vertical-line']} />
    <Button onClick={onApproveClick} noStyle>
      <Text size={'small'} color={'blue'}>Approve</Text>
    </Button>
  </span>;

const renderControls = ({
  isDeleting,
  isConfirmingDelete,
  isWorking,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onEditClick,
  onDeleteConfirmClick,
}) => {
  if (isDeleting) {
    return (
      <Text size={'small'}> Deleting... </Text>
    );
  }

  if (manager && isWorking && !isDeleting) {
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
      {manager && renderApproval({
        onApproveClick,
      })}
    </div>
  );
};

/* eslint-enable react/prop-types */

const PostDetails = ({
  isDeleting,
  isConfirmingDelete,
  isWorking,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  draftDetails,
}) =>
  <div className={style['post-details']}>
    <div className={style['post-action-details']}>
      <span className={style['post-icon']}>
        <ClockIcon />
      </span>
      <span className={style['post-action']}>
        <Text size={'small'}>{draftDetails.postAction}</Text>
      </span>
    </div>
    <div className={style['post-controls']}>
      {renderControls({
        isDeleting,
        isConfirmingDelete,
        isWorking,
        manager,
        onApproveClick,
        onCancelConfirmClick,
        onDeleteClick,
        onEditClick,
        onDeleteConfirmClick,
      })}
    </div>
  </div>;

PostDetails.propTypes = {
  isDeleting: PropTypes.bool,
  isConfirmingDelete: PropTypes.bool,
  isWorking: PropTypes.bool,
  manager: PropTypes.bool,
  onApproveClick: PropTypes.func,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  draftDetails: PropTypes.shape({
    userName: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    createdAt: PropTypes.string,
    via: PropTypes.string,
    postAction: PropTypes.string,
  }).isRequired,
};

PostDetails.defaultProps = {
  isDeleting: false,
  isConfirmingDelete: false,
  isWorking: false,
};

export default PostDetails;
