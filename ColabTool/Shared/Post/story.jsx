import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { Text } from '@bufferapp/components';
import Post from './index';

const profile = {
  name: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
};

const children = (
  <Text>
    {'I am a text-only test post.'}
  </Text>
);

storiesOf('Post')
  .add('default', () => (
    <Post
      profile={profile}
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
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
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
      onApproveClick={linkTo('Post', 'isWorkingManager')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      manager
      profile={profile}
    >
      {children}
    </Post>
  ))
  .add('hovered', () => (
    <Post
      hovered
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      profile={profile}
    >
      {children}
    </Post>
  ))
  .add('isConfirmingDelete', () => (
    <Post
      isConfirmingDelete
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      profile={profile}
    >
      {children}
    </Post>
  ))
  .add('isDeleting', () => (
    <Post
      isDeleting
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      profile={profile}
    >
      {children}
    </Post>
  ))
  .add('isWorking', () => (
    <Post
      isWorking
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      profile={profile}
    >
      {children}
    </Post>
  ))
  .add('isWorkingManager', () => (
    <Post
      manager
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      isWorking
      profile={profile}
    >
      {children}
    </Post>
  ))
  .add('postType:image', () => (
    <Post
      profile={profile}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mous-leave')}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      postType={'image'}
    >
      {children}
    </Post>
  ))
  .add('postType:link', () => (
    <Post
      profile={profile}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mous-leave')}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      postType={'link'}
    >
      {children}
    </Post>
  ));
