import React, { PropTypes } from 'react';
import {
  Image,
  Text,
} from '@bufferapp/components';
import {
  white,
  mystic,
} from '@bufferapp/components/style/color';
import {
  borderWidth,
} from '@bufferapp/components/style/border';

const postDetailsStyle = {
  display: 'flex',
  padding: '0.5rem 1rem',
  background: white,
  borderBottom: `${borderWidth} solid ${mystic}`,
};

const postAuthorStyle = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
};

const postDetailsAuthorImageStyle = {
  marginRight: '0.75rem',
  display: 'flex',
};

const postInfoStyle = {
  marginRight: '0.5rem',
};


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
  <div style={postDetailsStyle}>
    <div style={postAuthorStyle}>
      <span style={postDetailsAuthorImageStyle}>
        <Image
          alt={draftDetails.userName}
          src={draftDetails.avatarUrl}
          width={'1.25rem'}
          height={'1.25rem'}
          border={'circle'}
        />
      </span>
      <span style={postInfoStyle}>
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
