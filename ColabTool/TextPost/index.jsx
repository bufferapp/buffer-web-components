import React, { PropTypes } from 'react';
import {
  LinkifiedText,
} from '@bufferapp/components';
import style from './style.css';
import Post from '../Shared/Post';

const TextPost = ({
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
  retweetProfile,
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
    </div>
  );

  return (
    <Post
      isConfirmingDelete={isConfirmingDelete}
      isDeleting={isDeleting}
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
      onRescheduleClick={onRescheduleClick}
      draftDetails={draftDetails}
      text={text}
      retweetProfile={retweetProfile}
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
  text: PropTypes.string.isRequired,
};

TextPost.defaultProps = Post.defaultProps;

export default TextPost;
