import React, { PropTypes } from 'react';
import {
  Image,
  Text,
} from '@bufferapp/components';
import style from './style.css';

const getPostDetailString = (draftDetails) => {
  if (draftDetails.userName || draftDetails.email) {
    return `${draftDetails.userName || draftDetails.email} via ${draftDetails.via}, created ${draftDetails.createdAt}`;
  }

  return `Created via ${draftDetails.via} ${draftDetails.createdAt}`;
};

const PostHeader = ({
  draftDetails,
}) =>
  <div className={style['post-details']}>
    <div className={style['post-author']}>
      <Image
        alt={draftDetails.userName}
        src={draftDetails.avatarUrl}
        width={'1.25rem'}
        border={'circle'}
      />
      <span className={style['post-info']}>
        <Text size={'small'}>{getPostDetailString(draftDetails)}</Text>
      </span>
    </div>
  </div>;

PostHeader.propTypes = {
  draftDetails: PropTypes.shape({
    userName: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    createdAt: PropTypes.string,
    via: PropTypes.string,
    postAction: PropTypes.string,
  }).isRequired,
};

export default PostHeader;
