import React, { PropTypes } from 'react';
import {
  LinkifiedText,
} from '@bufferapp/components';
import style from './style.css';
import Post from '../Shared/Post';

const TextPost = ({
  hasPermission,
  isConfirmingDelete,
  isDeleting,
  isMoving,
  isPastDue,
  isWorking,
  imageSrc,
  links,
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
  text,
  retweetProfile,
  retweetComment,
  retweetCommentLinks,
  view,
}) => {
  const children = (
    <div className={style['post-content']}>
      <span className={style['post-content-text']}>
        <LinkifiedText
          links={links}
          size={'mini'}
          newTab
          unstyled
        >
          {text}
        </LinkifiedText>
      </span>
    </div>
  );

  return (
    <Post
      hasPermission={hasPermission}
      isConfirmingDelete={isConfirmingDelete}
      isDeleting={isDeleting}
      isMoving={isMoving}
      isPastDue={isPastDue}
      isWorking={isWorking}
      imageSrc={imageSrc}
      links={links}
      manager={manager}
      onApproveClick={onApproveClick}
      onCancelConfirmClick={onCancelConfirmClick}
      onDeleteClick={onDeleteClick}
      onDeleteConfirmClick={onDeleteConfirmClick}
      onEditClick={onEditClick}
      onMoveToDraftsClick={onMoveToDraftsClick}
      onRequestApprovalClick={onRequestApprovalClick}
      onRescheduleClick={onRescheduleClick}
      draftDetails={draftDetails}
      text={text}
      retweetProfile={retweetProfile}
      retweetComment={retweetComment}
      retweetCommentLinks={retweetCommentLinks}
      view={view}
    >
      {children}
    </Post>
  );
};

TextPost.propTypes = {
  ...Post.commonPropTypes,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(React.PropTypes.number),
    }),
  ).isRequired,
  retweetCommentLinks: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(React.PropTypes.number),
    }),
  ),
  text: PropTypes.string.isRequired,
};

TextPost.defaultProps = Post.defaultProps;

export default TextPost;
