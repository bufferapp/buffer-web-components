import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import { Text } from '@bufferapp/components';
import DashboardPost from './index';

const postDetails = {
  isRetweet: false,
  postAction: 'This post will be sent at 9:21 (GMT)',
};

const postDetailsError = {
  isRetweet: false,
  postAction: 'Sharing failed. Try again?',
  error: 'Sharing failed. Try again?',
};

const isARetweetPostDetails = {
  ...postDetails,
  isRetweet: true,
};

const sentPostDetails = {
  postAction: 'This post was sent June 20th at 9:21 (GMT)',
};

const retweetProfile = {
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png',
  handle: '@joelgascoigne',
  name: 'Joel Gascoigne',
};

const links = [{
  rawString: 'http://buff.ly/1LTbUqv',
  displayString: 'http://buff.ly/1LTbUqv',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
  indices: [74, 96],
}];

const retweetComment = 'What is a Product Designer? An awesome story by @jgadapee over on Medium! http://buff.ly/1LTbUqv';

const children = (
  <Text size={'mini'}>
    {'Rubber baby buggy bumpers.'}
  </Text>
);

storiesOf('DashboardPost')
  .addDecorator(checkA11y)
  .add('queued post', () => (
    <DashboardPost
      postDetails={postDetails}
      onCancelConfirmClick={linkTo('DashboardPost', 'hovered')}
      onDeleteClick={linkTo('DashboardPost', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPost', 'isDeleting')}
      onShareNowClick={linkTo('DashboardPost', 'isWorking')}
      onEditClick={action('edit-click')}
      sent={false}
    >
      {children}
    </DashboardPost>
  ))
  .add('sent', () => (
    <DashboardPost
      postDetails={sentPostDetails}
      onCancelConfirmClick={linkTo('DashboardPost', 'hovered')}
      onDeleteClick={linkTo('DashboardPost', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPost', 'isDeleting')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('DashboardPost', 'isWorking')}
      sent
    >
      {children}
    </DashboardPost>
  ))
  .add('error', () => (
    <DashboardPost
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('DashboardPost', 'isWorking')}
      postDetails={postDetailsError}
      sent={false}
    >
      {children}
    </DashboardPost>
  ))
  .add('isConfirmingDelete', () => (
    <DashboardPost
      isConfirmingDelete
      onCancelConfirmClick={linkTo('DashboardPost', 'hovered')}
      onDeleteClick={linkTo('DashboardPost', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPost', 'isDeleting')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('DashboardPost', 'isWorking')}
      postDetails={postDetails}
      sent={false}
    >
      {children}
    </DashboardPost>
  ))
  .add('isDeleting', () => (
    <DashboardPost
      isDeleting
      onCancelConfirmClick={linkTo('DashboardPost', 'hovered')}
      onDeleteClick={linkTo('DashboardPost', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPost', 'isDeleting')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('DashboardPost', 'isWorking')}
      postDetails={postDetails}
      sent={false}
    >
      {children}
    </DashboardPost>
  ))
  .add('isWorking', () => (
    <DashboardPost
      isWorking
      onCancelConfirmClick={linkTo('DashboardPost', 'hovered')}
      onDeleteClick={linkTo('DashboardPost', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPost', 'isDeleting')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('DashboardPost', 'isWorking')}
      postDetails={postDetails}
      sent={false}
    >
      {children}
    </DashboardPost>
  ))
  .add('retweet', () => (
    <DashboardPost
      postDetails={isARetweetPostDetails}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mous-leave')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('DashboardPost', 'isWorking')}
      retweetProfile={retweetProfile}
      sent={false}
    >
      {children}
    </DashboardPost>
  ))
  .add('retweet with comment', () => (
    <DashboardPost
      postDetails={isARetweetPostDetails}
      retweetCommentLinks={links}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mous-leave')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('DashboardPost', 'isWorking')}
      retweetProfile={retweetProfile}
      retweetComment={retweetComment}
      sent={false}
    >
      {children}
    </DashboardPost>
  ));
