import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import PostFooterDelete from './index';

storiesOf('PostFooterDelete')
  .addDecorator(checkA11y)
  .add('default', () => (
    <PostFooterDelete
      onCancelConfirmClick={linkTo('PostFooterDelete', 'default')}
      onDeleteClick={linkTo('PostFooterDelete', 'isConfirmingDelete')}
      onDeleteConfirmClick={action('delete-confirm-click')}
    />
  ))
  .add('isConfirmingDelete', () => (
    <PostFooterDelete
      onDeleteClick={action('on-delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onCancelConfirmClick={linkTo('PostFooterDelete', 'default')}
      isConfirmingDelete
    />
  ));
