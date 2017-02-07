import React, { PropTypes } from 'react';
import {
  Card,
  Image,
  LinkifiedText,
} from '@bufferapp/components';
import style from './style.css';
import PostButtonPanel from '../Shared/PostButtonPanel';
import PostDetails from '../Shared/PostDetails';
import Post from '../Shared/Post';

const ImagePost = ({
  isConfirmingDelete,
  isDeleting,
  isWorking,
  hovered,
  imageSrc,
  links,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onMouseEnter,
  onMouseLeave,
  profile,
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
        <Image
          src={imageSrc}
          width={'15em'}
          border={'rounded'}
        />
      </div>
    </div>
  );

  return (
    <Post
      children={children}
      isConfirmingDelete={isConfirmingDelete}
      isDeleting={isDeleting}
      isWorking={isWorking}
      hovered={hovered}
      imageSrc={imageSrc}
      links={links}
      manager={manager}
      onApproveClick={onApproveClick}
      onCancelConfirmClick={onCancelConfirmClick}
      onDeleteClick={onDeleteClick}
      onDeleteConfirmClick={onDeleteConfirmClick}
      onEditClick={onEditClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      profile={profile}
      postType={'image'}
      text={text}
    />
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
