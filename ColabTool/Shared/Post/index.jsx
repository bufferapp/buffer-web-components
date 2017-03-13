import React, { PropTypes } from 'react';
import {
  Card,
} from '@bufferapp/components';
import style from './style.css';
import PostDetails from '../PostDetails';
import PostTopDetails from '../PostTopDetails';
import RetweetPanel from '../RetweetPanel';

const renderRetweetPanel = (retweetProfile) => {
  if (retweetProfile) {
    return (
      <div className={style['retweet-profile-wrapper']}>
        <RetweetPanel {...retweetProfile} />
      </div>
    );
  }
};

const Post = ({
  children,
  isConfirmingDelete,
  isDeleting,
  isWorking,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  draftDetails,
  retweetProfile,
}) =>
  <div className={style['post-container']}>
    <div className={style.post}>
      <Card
        faded={isDeleting}
        noPadding
      >
        <PostTopDetails
          draftDetails={draftDetails}
        />
        <div className={style['post-content']}>
          {renderRetweetPanel(retweetProfile)}
          {children}
        </div>
        <PostDetails
          isDeleting={isDeleting}
          isConfirmingDelete={isConfirmingDelete}
          isWorking={isWorking}
          manager={manager}
          onApproveClick={onApproveClick}
          onCancelConfirmClick={onCancelConfirmClick}
          onDeleteClick={onDeleteClick}
          onDeleteConfirmClick={onDeleteConfirmClick}
          onEditClick={onEditClick}
          draftDetails={draftDetails}
        />
      </Card>
    </div>
  </div>;

Post.commonPropTypes = {
  isConfirmingDelete: PropTypes.bool,
  isDeleting: PropTypes.bool,
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
  retweetProfile: PropTypes.shape({
    name: PropTypes.string,
    handle: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

Post.propTypes = {
  ...Post.commonPropTypes,
  children: PropTypes.node.isRequired,
};

Post.defaultProps = {
  isConfirmingDelete: false,
  isDeleting: false,
  isWorking: false,
  manager: false,
};

export default Post;
