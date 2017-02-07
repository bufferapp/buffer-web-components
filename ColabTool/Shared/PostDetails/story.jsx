import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import PostDetails from './index';

const profile = {
  name: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
};

storiesOf('PostDetails')
  .add('default', () => (
    <PostDetails
      onCancelConfirmClick={linkTo('PostDetails', 'hovered')}
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onEditClick={action('edit-click')}
      profile={profile}
      postType={'image'}
    />
  ))
  .add('postType=link', () => (
    <PostDetails
      onCancelConfirmClick={linkTo('PostDetails', 'hovered')}
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onEditClick={action('edit-click')}
      profile={profile}
      postType={'link'}
    />
  ))
  .add('isConfirmingDelete', () => (
    <PostDetails
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'hovered')}
      onEditClick={action('edit-click')}
      postType={'image'}
      profile={profile}
      isConfirmingDelete
    />
  ))
  .add('isDeleting', () => (
    <PostDetails
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'hovered')}
      onEditClick={action('edit-click')}
      postType={'image'}
      profile={profile}
      isDeleting
    />
  ));
