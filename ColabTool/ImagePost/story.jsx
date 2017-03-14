import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import ImagePost from './index';

const links = [{
  rawString: 'http://buff.ly/1LTbUqv',
  displayString: 'http://buff.ly/1LTbUqv',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
  indices: [74, 96],
}];

const text = 'What is a Product Designer? An awesome story by @jgadapee over on Medium! http://buff.ly/1LTbUqv';

const draftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
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

storiesOf('ImagePost')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ImagePost
      imageSrc={imageSrc}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ))
  .add('manager', () => (
    <ImagePost
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
    />
  ))
  .add('square image', () => (
    <ImagePost
      imageSrc={squareImage}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ))
  .add('tall image', () => (
    <ImagePost
      imageSrc={tallImage}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ))
  .add('wide image', () => (
    <ImagePost
      imageSrc={wideImage}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ))
  .add('retweet', () => (
    <ImagePost
      imageSrc={imageSrc}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      retweetProfile={retweetProfile}
    />
  ));
