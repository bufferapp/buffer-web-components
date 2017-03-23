import React, { PropTypes } from 'react';
import {
  Image,
  LinkifiedText,
} from '@bufferapp/components';
import style from './style.css';
import Post from '../Shared/Post';

const ImagePost = ({
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
      <div>
        <Image
          src={imageSrc}
          width={'15rem'}
          maxHeight={'20rem'}
          minHeight={'10rem'}
          border={'rounded'}
          objectFit={'cover'}
        />
      </div>
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
};

ImagePost.defaultProps = Post.defaultProps;

export default ImagePost;
