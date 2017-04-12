import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import { Text } from '@bufferapp/components';
import Post from './index';

const draftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const retweetProfile = {
  name: 'Joel Gascoigne',
  handle: '@joelgascoigne',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png',
};

const children = (
  <Text size={'mini'}>
    {'I am a text-only test post.'}
  </Text>
);

storiesOf('Post')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Post
      hasPermission
      draftDetails={draftDetails}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
    >
      {children}
    </Post>
  ))
  .add('manager', () => (
    <Post
      hasPermission
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
      onApproveClick={linkTo('Post', 'isWorkingManager')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      manager
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('isConfirmingDelete', () => (
    <Post
      hasPermission
      isConfirmingDelete
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('isDeleting', () => (
    <Post
      hasPermission
      isDeleting
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('isWorking', () => (
    <Post
      hasPermission
      isWorking
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('isWorkingManager', () => (
    <Post
      hasPermission
      manager
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      isWorking
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('retweet', () => (
    <Post
      hasPermission
      draftDetails={draftDetails}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mous-leave')}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      retweetProfile={retweetProfile}
    >
      {children}
    </Post>
  ))
  .add('past due', () => (
    <Post
      hasPermission
      draftDetails={draftDetails}
      isPastDue
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
    >
      {children}
    </Post>
  ))
  .add('past due no permission', () => (
    <Post
      hasPermission={false}
      draftDetails={draftDetails}
      isPastDue
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
    >
      {children}
    </Post>
  ))
  .add('no permission', () => (
    <Post
      hasPermission={false}
      draftDetails={draftDetails}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
    >
      {children}
    </Post>
  ));
