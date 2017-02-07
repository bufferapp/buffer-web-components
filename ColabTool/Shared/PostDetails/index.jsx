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
  isConfirmingDelete,
  onCancelConfirmClick,
}) => {
  if (isConfirmingDelete) {
    return (
      <span className={style['post-cancel-delete']}>
        <Button onClick={onCancelConfirmClick} noStyle>
          <Text size={'small'}>Cancel</Text>
        </Button>
      </span>
    );
  }
};

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
  isDeleting,
  isConfirmingDelete,
  onCancelConfirmClick,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span>
    { !isDeleting ? renderDeleteButton({
      isConfirmingDelete,
      onDeleteConfirmClick,
      onDeleteClick,
    }) : <Text size={'small'}> Deleting... </Text> }
    {renderConfirmDelete({ isConfirmingDelete, onCancelConfirmClick })}
  </span>;

const renderEdit = ({ isDeleting, onEditClick }) => {
  if (!isDeleting) {
    return (
      <span className={style['post-button-last']}>
        <Button onClick={onEditClick} noStyle>
          <span className={style['post-icon']}>
            <Icon type={'edit'} size={'small'} />
          </span>
          <Text size={'small'}>Edit Post</Text>
        </Button>
      </span>
    );
  }
};

const renderHovered = ({
  isDeleting,
  isConfirmingDelete,
  onCancelConfirmClick,
  onDeleteClick,
  onEditClick,
  onDeleteConfirmClick,
}) =>
  <div>
    {renderDelete({
      isDeleting,
      isConfirmingDelete,
      onCancelConfirmClick,
      onDeleteConfirmClick,
      onDeleteClick,
    })}
    {renderEdit({
      isDeleting,
      onEditClick,
    })}
  </div>;

const renderDefault = postType =>
  <div>
    <span className={style['post-icon']}>
      <Icon type={postType} size={'small'} />
    </span>
    <Text size={'small'}>via web</Text>
  </div>;

/* eslint-enable react/prop-types */

const PostDetails = ({
  isDeleting,
  hovered,
  isConfirmingDelete,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  profile,
  postType,
}) =>
  <div className={style['post-details']}>
    <div className={style['post-source']}>
      {hovered || isConfirmingDelete || isDeleting ? renderHovered({
        isDeleting,
        isConfirmingDelete,
        onCancelConfirmClick,
        onDeleteClick,
        onEditClick,
        onDeleteConfirmClick,
      }) : renderDefault(postType)}
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
      <Text size={'small'}>{profile.email}</Text>
    </div>
  </div>;

PostDetails.propTypes = {
  isDeleting: PropTypes.bool,
  isConfirmingDelete: PropTypes.bool,
  hovered: PropTypes.bool,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  postType: PropTypes.oneOf(['image', 'link', 'text']).isRequired,
};

PostDetails.defaultProps = {
  isDeleting: false,
  isConfirmingDelete: false,
  hovered: false,
};

export default PostDetails;
