import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import PostTopDetails from './index';

const draftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const justCreatedTimeDraftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const noUserNameDraftDetails = {
  userName: '',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const noUserNameJustTimeDraftDetails = {
  userName: '',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const noNameOrEmailDraftDetails = {
  userName: '',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: '',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const noNameOrEmailJustTimeDraftDetails = {
  userName: '',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: '',
  via: 'web',
  createdAt: 'at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

storiesOf('PostTopDetails')
  .add('default', () => (
    <PostTopDetails
      draftDetails={draftDetails}
    />
  ))
  .add('just created at time', () => (
    <PostTopDetails
      draftDetails={justCreatedTimeDraftDetails}
    />
  ))
  .add('no userName', () => (
    <PostTopDetails
      draftDetails={noUserNameDraftDetails}
    />
  ))
  .add('no userName and just created at time', () => (
    <PostTopDetails
      draftDetails={noUserNameJustTimeDraftDetails}
    />
  ))
  .add('no userName or Email', () => (
    <PostTopDetails
      draftDetails={noNameOrEmailDraftDetails}
    />
  ))
  .add('no userName or Email and just created at time', () => (
    <PostTopDetails
      draftDetails={noNameOrEmailJustTimeDraftDetails}
    />
  ));
