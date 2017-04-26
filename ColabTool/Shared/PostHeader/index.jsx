import React, { PropTypes } from 'react';
import {
  Image,
  Text,
} from '@bufferapp/components';
import style from './style.css';

const getPostDetailString = (draftDetails) => {
  const idInfo = draftDetails.userName || draftDetails.email;
  const retweetString = draftDetails.isRetweet ? ' retweet' : '';

  if (idInfo) {
    return `${idInfo} created this${retweetString} ${draftDetails.createdAt}`;
  }

  return `Created this${retweetString} ${draftDetails.createdAt}`;
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
    avatarUrl: PropTypes.string,
    createdAt: PropTypes.string,
    email: PropTypes.string,
    isRetweet: PropTypes.bool,
    postAction: PropTypes.string,
    userName: PropTypes.string,
    via: PropTypes.string,
  }).isRequired,
};

export default PostHeader;
