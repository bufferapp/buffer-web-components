import React, { PropTypes } from 'react';
import {
  Card,
} from '@bufferapp/components';
import style from './style.css';
import PostButtonPanel from '../PostButtonPanel';
import PostDetails from '../PostDetails';

const Post = ({
  children,
  isConfirmingDelete,
  isDeleting,
  isWorking,
  hovered,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onMouseEnter,
  onMouseLeave,
  postType,
  profile,
}) =>
  <div className={style['post-container']}>
    <div className={style.post}>
      <Card
        hovered={hovered}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        noPadding
      >
        <div className={style['post-content']}>
          {children}
        </div>
        <PostDetails
          isDeleting={isDeleting}
          isConfirmingDelete={isConfirmingDelete}
          onCancelConfirmClick={onCancelConfirmClick}
          onDeleteClick={onDeleteClick}
          onDeleteConfirmClick={onDeleteConfirmClick}
          onEditClick={onEditClick}
          profile={profile}
          postType={postType === 'text' ? 'link' : postType}
        />
      </Card>
    </div>
    <PostButtonPanel
      disabled={hovered || isConfirmingDelete || isDeleting}
      manager={manager}
      onApproveClick={onApproveClick}
      isWorking={isWorking}
    />
  </div>;

Post.commonPropTypes = {
  isConfirmingDelete: PropTypes.bool,
  isDeleting: PropTypes.bool,
  isWorking: PropTypes.bool,
  hovered: PropTypes.bool,
  manager: PropTypes.bool,
  onApproveClick: PropTypes.func.isRequired,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

Post.propTypes = {
  ...Post.commonPropTypes,
  children: PropTypes.node.isRequired,
  postType: PropTypes.oneOf(['image', 'link', 'text']),
};

Post.defaultProps = {
  isConfirmingDelete: false,
  isDeleting: false,
  isWorking: false,
  hovered: false,
  manager: false,
  postType: 'text',
};

export default Post;
