import React from 'react';
import PropTypes from 'prop-types';
import {
  LinkifiedText,
  MultipleImages,
} from '@bufferapp/components';
// import style from './style.css';
import Post from '../Shared/Post';

const postContentStyle = {
  display: 'flex',
};

const postContentTextStyle = {
  paddingRight: '1rem',
  flexGrow: 1,
};


const MultipleImagesPost = ({
  draftDetails,
  hasPermission,
  imageUrls,
  isConfirmingDelete,
  isDeleting,
  isMoving,
  isPastDue,
  isWorking,
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
  retweetProfile,
  scheduledAt,
  text,
  view,
}) => {
  const children = (
    <div style={postContentStyle}>
      <span style={postContentTextStyle}>
        <LinkifiedText
          links={links}
          size={'mini'}
          newTab
          unstyled
        >
          {text}
        </LinkifiedText>
      </span>
      <div>
        <MultipleImages
          border={'rounded'}
          height={'15rem'}
          urls={imageUrls}
          width={'20rem'}
        />
      </div>
    </div>
  );

  return (
    <Post
      draftDetails={draftDetails}
      hasPermission={hasPermission}
      isConfirmingDelete={isConfirmingDelete}
      isDeleting={isDeleting}
      isMoving={isMoving}
      isPastDue={isPastDue}
      isWorking={isWorking}
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
      retweetProfile={retweetProfile}
      scheduledAt={scheduledAt}
      text={text}
      view={view}
    >
      {children}
    </Post>
  );
};

MultipleImagesPost.propTypes = {
  ...Post.commonPropTypes,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(PropTypes.number),
      rawString: PropTypes.string,
    }),
  ).isRequired,
  text: PropTypes.string.isRequired,
};

MultipleImagesPost.defaultProps = Post.defaultProps;

export default MultipleImagesPost;
