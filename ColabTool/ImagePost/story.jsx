import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import ImagePost from './index';

const links = [{
  rawString: 'http://buff.ly/1LTbUqv',
  displayString: 'http://buff.ly/1LTbUqv',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
  indices: [74, 96],
}];

const text = 'What is a Product Designer? An awesome story by @jgadapee over on Medium! http://buff.ly/1LTbUqv';

const draftDetails = {
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  createdAt: 'on March 2nd at 12:45pm (GMT)',
  email: 'ash@buffer.com',
  isRetweet: false,
  postAction: 'This post will be added to the queue',
  userName: 'Ash',
  via: 'web',
};

const isARetweetDraftDetails = {
  ...draftDetails,
  isRetweet: true,
};

const draftDetailsPastDue = {
  ...draftDetails,
  postAction: 'This post was scheduled for March 12 at 9:42pm (GMT)',
};

const draftDetailsScheduled = {
  ...draftDetails,
  postAction: 'This post is scheduled for March 12 at 9:42pm (GMT)',
};

const retweetProfile = {
  name: 'Joel Gascoigne',
  handle: '@joelgascoigne',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png',
};


const imageSrc = 'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg';
const squareImage = 'http://lorempixel.com/400/400/cats/';
const tallImage = 'http://lorempixel.com/400/900/cats/';
const wideImage = 'http://lorempixel.com/900/400/cats/';

const draftsView = 'drafts';
const scheduledAt = 123456789;

storiesOf('ImagePost', module)
  .addDecorator(checkA11y)
  .add('default. All drafts view.', () => (
    <ImagePost
      hasPermission
      imageSrc={imageSrc}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={draftsView}
    />
  ))
  .add('scheduled', () => (
    <ImagePost
      hasPermission
      imageSrc={imageSrc}
      links={links}
      draftDetails={draftDetailsScheduled}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      scheduledAt={scheduledAt}
      view={draftsView}
    />
  ))
  .add('manager', () => (
    <ImagePost
      hasPermission
      imageSrc={imageSrc}
      links={links}
      draftDetails={draftDetails}
      text={text}
      manager
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={draftsView}
    />
  ))
  .add('square image', () => (
    <ImagePost
      hasPermission
      imageSrc={squareImage}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={draftsView}
    />
  ))
  .add('tall image', () => (
    <ImagePost
      hasPermission
      imageSrc={tallImage}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={draftsView}
    />
  ))
  .add('wide image', () => (
    <ImagePost
      hasPermission
      imageSrc={wideImage}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={draftsView}
    />
  ))
  .add('retweet', () => (
    <ImagePost
      hasPermission
      imageSrc={imageSrc}
      links={links}
      draftDetails={isARetweetDraftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      retweetProfile={retweetProfile}
      view={draftsView}
    />
  ))
  .add('past due', () => (
    <ImagePost
      hasPermission
      imageSrc={imageSrc}
      links={links}
      draftDetails={draftDetailsPastDue}
      text={text}
      isPastDue
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      scheduledAt={scheduledAt}
      view={draftsView}
    />
  ))
  .add('past due no permission', () => (
    <ImagePost
      hasPermission={false}
      imageSrc={imageSrc}
      links={links}
      draftDetails={draftDetailsPastDue}
      text={text}
      isPastDue
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      scheduledAt={scheduledAt}
      view={draftsView}
    />
  ))
  .add('tag', () => (
    <ImagePost
      hasPermission
      imageSrc={imageSrc}
      links={links}
      draftDetails={draftDetails}
      text={text}
      tag={'GIF'}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={draftsView}
    />
  ))
  .add('no permission', () => (
    <ImagePost
      hasPermission={false}
      imageSrc={imageSrc}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      view={draftsView}
    />
  ));
