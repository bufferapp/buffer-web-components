import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import PostButtonPanel from './index';

storiesOf('PostButtonPanel')
  .addDecorator(checkA11y)
  .add('member', () => (
    <PostButtonPanel
      onApproveClick={linkTo('PostButtonPanel', 'member, isWorking')}
    />
  ))
  .add('member, isWorking', () => (
    <PostButtonPanel
      onApproveClick={action('approve-click')}
      isWorking
    />
  ))
  .add('manager', () => (
    <PostButtonPanel
      onApproveClick={linkTo('PostButtonPanel', 'manager, isWorking')}
      manager
    />
  ))
  .add('manager, isWorking', () => (
    <PostButtonPanel
      onApproveClick={action('approve-click')}
      manager
      isWorking
    />
  ))
  .add('disabled', () => (
    <PostButtonPanel
      onApproveClick={action('approve-click')}
      disabled
    />
  ));
