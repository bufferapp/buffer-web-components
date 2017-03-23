import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import MultipleImagesPost from './index';

const links = [{
  displayString: 'http://buff.ly/1LTbUqv',
  indices: [74, 96],
  rawString: 'http://buff.ly/1LTbUqv',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
}];

const text = 'What is a Product Designer? An awesome story by @jgadapee over on Medium! http://buff.ly/1LTbUqv';

const draftDetails = {
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  email: 'ash@buffer.com',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
  userName: 'Ash',
  via: 'web',
};

const draftDetailsPastDue = {
  ...draftDetails,
  postAction: 'This post was scheduled for March 12 at 9:42pm (GMT)',
};

const imageUrls = [
  'http://lorempixel.com/400/400/cats/',
  'http://lorempixel.com/400/400/cats/',
  'http://lorempixel.com/400/400/cats/',
  'http://lorempixel.com/400/400/cats/',
];

storiesOf('MultipleImagesPost')
  .addDecorator(checkA11y)
  .add('default', () => (
    <MultipleImagesPost
      draftDetails={draftDetails}
      links={links}
      imageUrls={imageUrls}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      text={text}
    />
  ))
  .add('past due', () => (
    <MultipleImagesPost
      draftDetails={draftDetailsPastDue}
      links={links}
      imageUrls={imageUrls}
      isPastDue
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      text={text}
    />
  ));
