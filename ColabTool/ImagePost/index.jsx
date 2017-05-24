import React, { PropTypes } from 'react';
import {
  IdTag,
  Image,
  LinkifiedText,
} from '@bufferapp/components';
import Post from '../Shared/Post';

const postContentStyle = {
  display: 'flex',
};

const postContentTextStyle = {
  paddingRight: '1rem',
  flexGrow: 1,
};

const imageWrapperStyle = {
  position: 'relative',
};

const imageTagStyle = {
  position: 'absolute',
  bottom: '0.7rem',
  left: '0.7rem',
};


const renderTag = (tag) => {
  if (!tag) return;
  return (
    <span style={imageTagStyle}>
      <IdTag>{tag}</IdTag>
    </span>
  );
};

const ImagePost = ({
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
      <div style={imageWrapperStyle}>
        <Image
          src={imageSrc}
          width={'15rem'}
          maxHeight={'20rem'}
          minHeight={'10rem'}
          border={'rounded'}
          objectFit={'cover'}
        />
        { renderTag(tag) }
      </div>

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
      scheduledAt={scheduledAt}
      view={view}
    >
      {children}
    </Post>
  );
};

ImagePost.propTypes = {
  ...Post.commonPropTypes,
  imageSrc: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(React.PropTypes.number),
    }),
  ).isRequired,
  text: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

ImagePost.defaultProps = Post.defaultProps;

export default ImagePost;
