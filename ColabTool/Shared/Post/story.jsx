import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { Text } from '@bufferapp/components';
import Post from './index';
import style from './style.css';

const profile = {
  name: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
};

const text = 'I am a text-only test post.';

const postType = 'text';

const children = (
  <div className={style['post-content']}>
    <Text>
      {text}
    </Text>
  </div>
);

storiesOf('Post')
  .add('default', () => (
    <Post
    	children={children}
    	profile={profile}
    	onMouseEnter={linkTo('Post', 'hovered')}
    	onMouseLeave={linkTo('Post', 'default')}
    	onApproveClick={linkTo('Post', 'isWorking')}
    	onCancelConfirmClick={linkTo('Post', 'hovered')}
    	onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
    	onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
    	onEditClick={action('edit-click')}
      postType={postType}
    />
  ))
  .add('manager', () => (
    <Post
      children={children}
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
      onApproveClick={linkTo('Post', 'isWorkingManager')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      manager
      postType={postType}
      profile={profile}
    />
  ))
  .add('hovered', () => (
    <Post
      children={children}
      hovered
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      postType={postType}
      profile={profile}
    />
  ))
  .add('isConfirmingDelete', () => (
    <Post
      children={children}
      isConfirmingDelete
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      postType={postType}
      profile={profile}
    />
  ))
  .add('isDeleting', () => (
    <Post
      children={children}
      isDeleting
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      postType={postType}
      profile={profile}
    />
  ))
  .add('isWorking', () => (
    <Post
      children={children}
      isWorking
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      postType={postType}
      profile={profile}
    />
  ))
  .add('isWorkingManager', () => (
    <Post
      children={children}
      manager
      onMouseEnter={linkTo('Post', 'hovered')}
      onMouseLeave={linkTo('Post', 'default')}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      isWorking
      postType={postType}
      profile={profile}
    />
  ));