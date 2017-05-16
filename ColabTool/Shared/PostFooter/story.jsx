import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import PostFooter from './index';

const draftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const draftDetailsPastDue = {
  ...draftDetails,
  postAction: 'This post was scheduled for March 12 at 9:42pm (GMT)',
};

const draftsView = 'drafts';
const approvalView = 'approval';

storiesOf('PostFooter')
  .addDecorator(checkA11y)
  .add('drafts view: manager', () => (
    <PostFooter
      hasPermission
      manager
      onApproveClick={linkTo('PostFooter', 'drafts view: managerIsApproving')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ))
  .add('drafts view: manager past due', () => (
    <PostFooter
      hasPermission
      isPastDue
      manager
      onApproveClick={linkTo('PostFooter', 'managerIsApproving')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      draftDetails={draftDetailsPastDue}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager', () => (
    <PostFooter
      hasPermission
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('PostFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager past due', () => (
    <PostFooter
      hasPermission
      isPastDue
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('PostFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager, no permission', () => (
    <PostFooter
      hasPermission={false}
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('PostFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager past due, no permission', () => (
    <PostFooter
      hasPermission={false}
      isPastDue
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('PostFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ))
  .add('approval view: manager', () => (
    <PostFooter
      hasPermission
      manager
      onApproveClick={linkTo('PostFooter', 'approval view: managerIsApproving')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onMoveToDraftsClick={action('move-to-drafts-click')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('approval view: manager past due', () => (
    <PostFooter
      hasPermission
      isPastDue
      manager
      onApproveClick={linkTo('PostFooter', 'managerIsApproving')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      draftDetails={draftDetailsPastDue}
      view={approvalView}
    />
  ))
  .add('approval view: not a manager', () => (
    <PostFooter
      hasPermission
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onMoveToDraftsClick={action('move-to-drafts-click')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('approval view: not a manager past due', () => (
    <PostFooter
      hasPermission
      isPastDue
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      onMoveToDraftsClick={action('move-to-drafts-click')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('approval view: not manager, no permission', () => (
    <PostFooter
      hasPermission={false}
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('PostFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('isConfirmingDelete', () => (
    <PostFooter
      hasPermission
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isConfirmingDelete
      view={draftsView}
    />
  ))
  .add('managerIsConfirmingDelete', () => (
    <PostFooter
      hasPermission
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isConfirmingDelete
      view={draftsView}
    />
  ))
  .add('isDeleting', () => (
    <PostFooter
      hasPermission
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isDeleting
      view={draftsView}
    />
  ))
  .add('drafts view: managerIsApproving', () => (
    <PostFooter
      hasPermission
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isWorking
      view={draftsView}
    />
  ))
  .add('approval view: managerIsApproving', () => (
    <PostFooter
      hasPermission
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isWorking
      view={approvalView}
    />
  ))
  .add('drafts view: isWorking', () => (
    <PostFooter
      hasPermission
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isWorking
      view={draftsView}
    />
  ))
  .add('no permission', () => (
    <PostFooter
      hasPermission={false}
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ));
