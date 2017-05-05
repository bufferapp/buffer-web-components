import React from 'react';
import ImagePost from '../ImagePost';

const VideoPost = ({
  hasPermission,
  isConfirmingDelete,
  isDeleting,
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
  onRescheduleClick,
  draftDetails,
  text,
  tag,
  retweetProfile,
}) =>
  <ImagePost
    hasPermission={hasPermission}
    isConfirmingDelete={isConfirmingDelete}
    isDeleting={isDeleting}
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
    onRescheduleClick={onRescheduleClick}
    retweetProfile={retweetProfile}
  />;

VideoPost.propTypes = ImagePost.propTypes;

VideoPost.defaultProps = {
  ...ImagePost.defaultProps,
  tag: 'VIDEO',
};

export default VideoPost;
