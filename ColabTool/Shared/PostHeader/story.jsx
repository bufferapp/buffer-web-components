import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import PostHeader from './index';

const draftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'Buffer for Android',
  createdAt: 'on March 2nd at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const viaApiDraftDetails = {
  ...draftDetails,
  via: 'api',
};

const justCreatedTimeDraftDetails = {
  ...draftDetails,
  createdAt: 'at 12:45pm (GMT)',
};
const justCreatedTimeViaApiDraftDetails = {
  ...draftDetails,
  via: 'api',
  createdAt: 'at 12:45pm (GMT)',
};

const noUserNameViaApiDraftDetails = {
  ...draftDetails,
  userName: '',
  via: 'api',
};

const noUserNameDraftDetails = {
  ...draftDetails,
  userName: '',
};

const noUserNameJustTimeDraftDetails = {
  ...draftDetails,
  userName: '',
  createdAt: 'at 12:45pm (GMT)',
};

const noUserNameJustTimeViaApiDraftDetails = {
  ...draftDetails,
  userName: '',
  createdAt: 'at 12:45pm (GMT)',
  via: 'api',
};

const noNameOrEmailDraftDetails = {
  ...draftDetails,
  userName: '',
  email: '',
};

const noNameOrEmailJustTimeDraftDetails = {
  ...draftDetails,
  userName: '',
  email: '',
  via: 'web',
  createdAt: 'at 12:45pm (GMT)',
};

const isRetweetDraftDetails = {
  ...draftDetails,
  isRetweet: true,
};

const isRetweetViaApiDraftDetails = {
  ...isRetweetDraftDetails,
  via: 'api',
};

const noUsernameOrEmailIsRetweetDraftDetails = {
  ...isRetweetDraftDetails,
  userName: '',
  email: '',
};

storiesOf('PostHeader')
  .addDecorator(checkA11y)
  .add('default', () => (
    <PostHeader
      draftDetails={draftDetails}
    />
  ))
  .add('sent via API', () => (
    <PostHeader
      draftDetails={viaApiDraftDetails}
    />
  ))
  .add('createdAt time', () => (
    <PostHeader
      draftDetails={justCreatedTimeDraftDetails}
    />
  ))
  .add('createdAt time [api]', () => (
    <PostHeader
      draftDetails={justCreatedTimeViaApiDraftDetails}
    />
  ))
  .add('no userName', () => (
    <PostHeader
      draftDetails={noUserNameDraftDetails}
    />
  ))
  .add('no userName [api]', () => (
    <PostHeader
      draftDetails={noUserNameViaApiDraftDetails}
    />
  ))
  .add('no userName and createdAt time', () => (
    <PostHeader
      draftDetails={noUserNameJustTimeDraftDetails}
    />
  ))
  .add('no userName and createdAt time [api]', () => (
    <PostHeader
      draftDetails={noUserNameJustTimeViaApiDraftDetails}
    />
  ))
  .add('no userName or Email', () => (
    <PostHeader
      draftDetails={noNameOrEmailDraftDetails}
    />
  ))
  .add('no userName or Email and createdAt time [api]', () => (
    <PostHeader
      draftDetails={noNameOrEmailJustTimeDraftDetails}
    />
  ))
  .add('retweet', () => (
    <PostHeader
      draftDetails={isRetweetDraftDetails}
    />
  ))
  .add('retweet [api]', () => (
    <PostHeader
      draftDetails={isRetweetViaApiDraftDetails}
    />
  ))
  .add('no userName or Email and a retweet', () => (
    <PostHeader
      draftDetails={noUsernameOrEmailIsRetweetDraftDetails}
    />
  ));
