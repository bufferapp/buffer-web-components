import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import PostList from './index';
import {
  posts,
  linkPosts,
  missingTypePosts,
  imagePosts,
  multipleImagePosts,
  videoPosts,
  unscheduledPosts,
} from './postData';

storiesOf('PostList')
  .addDecorator(checkA11y)
  .add('default', () => (
    <PostList
      posts={posts}
      onApproveClick={action('onApproveClick')}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onMoveToDraftsClick={action('onMoveToDraftsClick')}
      onRequestApprovalClick={action('onRequestApprovalClick')}
      onRescheduleClick={action('onRescheduleClick')}
    />
  ))
  .add('missing type', () => (
    <PostList
      posts={missingTypePosts}
      onApproveClick={action('onApproveClick')}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onMoveToDraftsClick={action('onMoveToDraftsClick')}
      onRequestApprovalClick={action('onRequestApprovalClick')}
      onRescheduleClick={action('onRescheduleClick')}
    />
  ))
  .add('link posts', () => (
    <PostList
      posts={linkPosts}
      onApproveClick={action('onApproveClick')}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onMoveToDraftsClick={action('onMoveToDraftsClick')}
      onRequestApprovalClick={action('onRequestApprovalClick')}
      onRescheduleClick={action('onRescheduleClick')}
    />
  ))
  .add('image posts', () => (
    <PostList
      posts={imagePosts}
      onApproveClick={action('onApproveClick')}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onMoveToDraftsClick={action('onMoveToDraftsClick')}
      onRequestApprovalClick={action('onRequestApprovalClick')}
      onRescheduleClick={action('onRescheduleClick')}
    />
  ))
  .add('multiple image posts', () => (
    <PostList
      posts={multipleImagePosts}
      onApproveClick={action('onApproveClick')}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onMoveToDraftsClick={action('onMoveToDraftsClick')}
      onRequestApprovalClick={action('onRequestApprovalClick')}
      onRescheduleClick={action('onRescheduleClick')}
    />
  ))
  .add('video posts', () => (
    <PostList
      posts={videoPosts}
      onApproveClick={action('onApproveClick')}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onMoveToDraftsClick={action('onMoveToDraftsClick')}
      onRequestApprovalClick={action('onRequestApprovalClick')}
      onRescheduleClick={action('onRescheduleClick')}
    />
  ))
  .add('unscheduled posts', () => (
    <PostList
      posts={unscheduledPosts}
      onApproveClick={action('onApproveClick')}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onMoveToDraftsClick={action('onMoveToDraftsClick')}
      onRequestApprovalClick={action('onRequestApprovalClick')}
      onRescheduleClick={action('onRescheduleClick')}
    />
  ));
