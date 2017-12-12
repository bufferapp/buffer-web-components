import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import PostFooterApproval from './index';

const draftsView = 'drafts';
const approvalView = 'approval';

storiesOf('PostFooterApproval')
  .addDecorator(checkA11y)
  .add('drafts view: manager', () => (
    <PostFooterApproval
      hasPermission
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      manager
      view={draftsView}
    />
  ))
  .add('drafts view: manager past due', () => (
    <PostFooterApproval
      hasPermission
      isPastDue
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      manager
      view={draftsView}
    />
  ))
  .add('drafts view: not manager', () => (
    <PostFooterApproval
      hasPermission
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager. no permissions.', () => (
    <PostFooterApproval
      hasPermission={false}
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager. past due', () => (
    <PostFooterApproval
      hasPermission
      isPastDue
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager. past due. no permissions.', () => (
    <PostFooterApproval
      hasPermission={false}
      isPastDue
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      view={draftsView}
    />
  ))
  .add('approval view: manager', () => (
    <PostFooterApproval
      hasPermission
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      manager
      view={approvalView}
    />
  ))
  .add('approval view: manager past due', () => (
    <PostFooterApproval
      hasPermission
      isPastDue
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      manager
      view={approvalView}
    />
  ))
  .add('approval view: not manager', () => (
    <PostFooterApproval
      hasPermission
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      view={approvalView}
    />
  ))
  .add('approval view: not manager. past due', () => (
    <PostFooterApproval
      hasPermission
      isPastDue
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      view={approvalView}
    />
  ))
  .add('approval view: not manager. past due. no permissions.', () => (
    <PostFooterApproval
      hasPermission={false}
      isPastDue
      onApproveClick={action('approve-click')}
      onRequestApprovalClick={action('request-approval-click')}
      onRescheduleClick={action('reschedule-click')}
      view={approvalView}
    />
  ));
