import React, { PropTypes } from 'react';
import {
  Button,
  Icon,
  Image,
  Text,
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
  <Button onClick={isConfirmingDelete ? onDeleteConfirmClick : onDeleteClick} noStyle>
    <span className={isConfirmingDelete ? style['post-confirming-delete'] : undefined}>
      <span className={style['post-icon']}>
        <Icon type={'x'} size={'small'} />
      </span>
      <Text size={'small'}>{ isConfirmingDelete ? 'Confirm' : 'Delete Post' }</Text>
    </span>
  </Button>;

const renderDelete = ({
  isConfirmingDelete,
  onCancelConfirmClick,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span>
    {renderDeleteButton({
      isConfirmingDelete,
      onDeleteConfirmClick,
      onDeleteClick,
    })}
    {isConfirmingDelete ?
      renderConfirmDelete({ onCancelConfirmClick }) :
      undefined
    }
  </span>;

const renderEdit = ({ onEditClick }) =>
  <span className={style['post-button-last']}>
    <Button onClick={onEditClick} noStyle>
      <span className={style['post-icon']}>
        <Icon type={'edit'} size={'small'} />
      </span>
      <Text size={'small'}>Edit Post</Text>
    </Button>
  </span>;

const renderControls = ({
  isDeleting,
  isConfirmingDelete,
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
    </div>
  );
};

/* eslint-enable react/prop-types */

const PostDetails = ({
  isDeleting,
  isConfirmingDelete,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  profile,
  postType,
}) =>
  <div className={style['post-details']}>
    <div className={style['post-controls']}>
      {renderControls({
        isDeleting,
        isConfirmingDelete,
        onCancelConfirmClick,
        onDeleteClick,
        onEditClick,
        onDeleteConfirmClick,
      })}
    </div>
    <div className={style['post-author']}>
      <span className={style['post-details-author-image']}>
        <Image
          alt={profile.name}
          src={profile.avatarUrl}
          width={'1em'}
          border={'circle'}
        />
      </span>
      <span className={style['post-details-author-email']}>
        <Text size={'small'}>{profile.email}</Text>
      </span>
      <span className={style['post-source']}>
        <Text size={'small'}>via web</Text>
      </span>
      <span className={style['post-icon-last']}>
        <Icon type={postType} size={'small'} />
      </span>
    </div>
  </div>;

PostDetails.propTypes = {
  isDeleting: PropTypes.bool,
  isConfirmingDelete: PropTypes.bool,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  postType: PropTypes.oneOf(['image', 'link', 'retweet']).isRequired,
};

PostDetails.defaultProps = {
  isDeleting: false,
  isConfirmingDelete: false,
};

export default PostDetails;
