import React, { PropTypes } from 'react';
import {
  Card,
  Image,
  LinkifiedText,
} from '@bufferapp/components';
import style from './style.css';
import PostButtonPanel from '../Shared/PostButtonPanel';
import PostDetails from '../Shared/PostDetails';

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
}) =>
  <div className={style['post-container']}>
    <div className={style.post}>
      <Card
        hovered={hovered}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        noPadding
      >
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
        <PostDetails
          isDeleting={isDeleting}
          isConfirmingDelete={isConfirmingDelete}
          hovered={hovered}
          onCancelConfirmClick={onCancelConfirmClick}
          onDeleteClick={onDeleteClick}
          onDeleteConfirmClick={onDeleteConfirmClick}
          onEditClick={onEditClick}
          profile={profile}
          postType={'image'}
        />
      </Card>
    </div>
    <PostButtonPanel
      disabled={hovered || isConfirmingDelete || isDeleting}
      manager={manager}
      onApproveClick={onApproveClick}
      isWorking={isWorking}
    />
  </div>;

ImagePost.propTypes = {
  isConfirmingDelete: PropTypes.bool,
  isDeleting: PropTypes.bool,
  isWorking: PropTypes.bool,
  hovered: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(React.PropTypes.number),
    }),
  ).isRequired,
  manager: PropTypes.bool,
  onApproveClick: PropTypes.func.isRequired,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

ImagePost.defaultProps = {
  isConfirmingDelete: false,
  isDeleting: false,
  isWorking: false,
  hovered: false,
  manager: false,
};

export default ImagePost;
