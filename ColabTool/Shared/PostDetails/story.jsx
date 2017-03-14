import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import PostDetails from './index';

const draftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

storiesOf('PostDetails')
  .addDecorator(checkA11y)
  .add('default', () => (
    <PostDetails
      onCancelConfirmClick={linkTo('PostDetails', 'default')}
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    />
  ))
  .add('manager', () => (
    <PostDetails
      manager
      onApproveClick={linkTo('PostDetails', 'managerIsApproving')}
      onCancelConfirmClick={linkTo('PostDetails', 'manager')}
      onDeleteClick={linkTo('PostDetails', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    />
  ))
  .add('isConfirmingDelete', () => (
    <PostDetails
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'default')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isConfirmingDelete
    />
  ))
  .add('managerIsConfirmingDelete', () => (
    <PostDetails
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostDetails', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isConfirmingDelete
    />
  ))
  .add('isDeleting', () => (
    <PostDetails
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'default')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isDeleting
    />
  ))
  .add('managerIsDeleting', () => (
    <PostDetails
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostDetails', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isDeleting
    />
  ))
  .add('managerIsApproving', () => (
    <PostDetails
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostDetails', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isWorking
    />
  ));
