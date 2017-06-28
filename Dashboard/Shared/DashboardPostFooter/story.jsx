import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import DashboardPostFooter from './index';

const postDetails = {
  postAction: 'This post will be sent at 9:21 (GMT)',
};

const postDetailsError = {
  postAction: 'Woops! Something went wrong. Try again?',
  error: 'Woops! Something went wrong. Try again?',
};

storiesOf('DashboardPostFooter')
  .addDecorator(checkA11y)
  .add('queued post', () => (
    <DashboardPostFooter
      onCancelConfirmClick={linkTo('DashboardPostFooter', 'queued post')}
      onDeleteClick={linkTo('DashboardPostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('DashboardPostFooter', 'isWorking')}
      postDetails={postDetails}
      sent={false}
    />
  ))
  .add('sent post', () => (
    <DashboardPostFooter
      postDetails={postDetails}
      sent
    />
  ))
  .add('post with error', () => (
    <DashboardPostFooter
      onCancelConfirmClick={linkTo('DashboardPostFooter', 'queued post')}
      onDeleteClick={linkTo('DashboardPostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('DashboardPostFooter', 'isWorking')}
      postDetails={postDetailsError}
      sent={false}
    />
  ))
  .add('isConfirmingDelete', () => (
    <DashboardPostFooter
      onDeleteClick={linkTo('DashboardPostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DashboardPostFooter', 'queued post')}
      onEditClick={action('edit-click')}
      postDetails={postDetails}
      isConfirmingDelete
      sent={false}
    />
  ))
  .add('isConfirmingDelete', () => (
    <DashboardPostFooter
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('DashboardPostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DashboardPostFooter', 'queued post')}
      onEditClick={action('edit-click')}
      postDetails={postDetails}
      isConfirmingDelete
      sent={false}
    />
  ))
  .add('isDeleting', () => (
    <DashboardPostFooter
      onDeleteClick={linkTo('DashboardPostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DashboardPostFooter', 'queued post')}
      onEditClick={action('edit-click')}
      postDetails={postDetails}
      isDeleting
      sent={false}
    />
  ))
  .add('isWorking', () => (
    <DashboardPostFooter
      onDeleteClick={linkTo('DashboardPostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DashboardPostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DashboardPostFooter', 'queued post')}
      onEditClick={action('edit-click')}
      postDetails={postDetails}
      isWorking
      sent={false}
    />
  ));
