import React from 'react';
import ImagePost from '../ImagePost';

const VideoPost = ({
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
  tag,
  retweetProfile,
  scheduledAt,
  view,
}) =>
  <ImagePost
    hasPermission={hasPermission}
    isConfirmingDelete={isConfirmingDelete}
    isDeleting={isDeleting}
    isMoving={isMoving}
    isPastDue={isPastDue}
    isWorking={isWorking}
    imageSrc={imageSrc}
    links={links}
    draftDetails={draftDetails}
    tag={tag}
    text={text}
    manager={manager}
    onApproveClick={onApproveClick}
    onCancelConfirmClick={onCancelConfirmClick}
    onDeleteClick={onDeleteClick}
    onDeleteConfirmClick={onDeleteConfirmClick}
    onEditClick={onEditClick}
    onMoveToDraftsClick={onMoveToDraftsClick}
    onRequestApprovalClick={onRequestApprovalClick}
    onRescheduleClick={onRescheduleClick}
    retweetProfile={retweetProfile}
    scheduledAt={scheduledAt}
    view={view}
  />;

VideoPost.propTypes = ImagePost.propTypes;

VideoPost.defaultProps = {
  ...ImagePost.defaultProps,
  tag: 'VIDEO',
};

export default VideoPost;
