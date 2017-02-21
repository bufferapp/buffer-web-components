import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import LinkPost from './index';

const links = [{
  rawString: 'http://buff.ly/1LTbUqv',
  displayString: 'http://buff.ly/1LTbUqv',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
  indices: [74, 96],
}];

const text = 'What is a Product Designer? An awesome story by @jgadapee over on Medium! http://buff.ly/1LTbUqv';

const linkAttachment = {
  title: 'What is a Product Designer?',
  description: 'A brief history at how history and markets influence design titles',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
};

const profile = {
  name: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
};

const imageSrc = 'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg';
const squareImage = 'http://lorempixel.com/400/400/cats/';
const tallImage = 'http://lorempixel.com/400/900/cats/';
const wideImage = 'http://lorempixel.com/900/400/cats/';

storiesOf('LinkPost')
  .add('default', () => (
    <LinkPost
      imageSrc={imageSrc}
      links={links}
      linkAttachment={linkAttachment}
      profile={profile}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ))
  .add('square image', () => (
    <LinkPost
      imageSrc={squareImage}
      links={links}
      linkAttachment={linkAttachment}
      profile={profile}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ))
  .add('tall image', () => (
    <LinkPost
      imageSrc={tallImage}
      links={links}
      linkAttachment={linkAttachment}
      profile={profile}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ))
  .add('wide image', () => (
    <LinkPost
      imageSrc={wideImage}
      links={links}
      linkAttachment={linkAttachment}
      profile={profile}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ));
