import React, { PropTypes } from 'react';
import {
  List,
} from '@bufferapp/components';
import TextPost from '../TextPost';
import ImagePost from '../ImagePost';
import MultipleImagesPost from '../MultipleImagesPost';
import LinkPost from '../LinkPost';
import VideoPost from '../VideoPost';
import styles from './style.css';

/* eslint-disable react/prop-types */

const renderPost = ({
  post,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onMoveToDraftsClick,
  onRequestApprovalClick,
  onRescheduleClick,
}) => {
  const postWithEventHandlers = {
    ...post,
    onApproveClick: () => onApproveClick({ post }),
    onCancelConfirmClick: () => onCancelConfirmClick({ post }),
    onDeleteClick: () => onDeleteClick({ post }),
    onDeleteConfirmClick: () => onDeleteConfirmClick({ post }),
    onEditClick: () => onEditClick({ post }),
    onMoveToDraftsClick: () => onMoveToDraftsClick({ post }),
    onRequestApprovalClick: () => onRequestApprovalClick({ post }),
    onRescheduleClick: e => onRescheduleClick({ post, target: e.target }),
  };
  switch (post.type) {
    case 'text':
      return (<TextPost {...postWithEventHandlers} />);
    case 'image':
      return (<ImagePost {...postWithEventHandlers} />);
    case 'multipleImage':
      return (<MultipleImagesPost {...postWithEventHandlers} />);
    case 'link':
      return (<LinkPost {...postWithEventHandlers} />);
    case 'video':
      return (<VideoPost {...postWithEventHandlers} />);
    default:
      return (<TextPost {...postWithEventHandlers} />);
  }
};

/* eslint-enable react/prop-types */

const PostList = ({
  posts,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onMoveToDraftsClick,
  onRequestApprovalClick,
  onRescheduleClick,
}) =>
  <List
    items={posts.map(post =>
      <div className={styles.post}>
        {
          renderPost({
            post,
            onApproveClick,
            onCancelConfirmClick,
            onDeleteClick,
            onDeleteConfirmClick,
            onEditClick,
            onMoveToDraftsClick,
            onRequestApprovalClick,
            onRescheduleClick,
          })
        }
      </div>,
    )}
  />;

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    }),
  ),
  onApproveClick: PropTypes.func,
  onCancelConfirmClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onDeleteConfirmClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onRescheduleClick: PropTypes.func,
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;
