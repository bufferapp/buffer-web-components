import React, { PropTypes } from 'react';
import {
  LinkifiedText,
  MultipleImages,
} from '@bufferapp/components';
import style from './style.css';
import Post from '../Shared/Post';

const MultipleImagesPost = ({
  draftDetails,
  imageUrls,
  isConfirmingDelete,
  isDeleting,
  isPastDue,
  isWorking,
  links,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onRescheduleClick,
  retweetProfile,
  text,
}) => {
  const children = (
    <div className={style['post-content']}>
      <span className={style['post-content-text']}>
        <LinkifiedText
          links={links}
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
      isConfirmingDelete={isConfirmingDelete}
      isDeleting={isDeleting}
      isPastDue={isPastDue}
      isWorking={isWorking}
      links={links}
      manager={manager}
      onApproveClick={onApproveClick}
      onCancelConfirmClick={onCancelConfirmClick}
      onDeleteClick={onDeleteClick}
      onDeleteConfirmClick={onDeleteConfirmClick}
      onEditClick={onEditClick}
      onRescheduleClick={onRescheduleClick}
      retweetProfile={retweetProfile}
      text={text}
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
