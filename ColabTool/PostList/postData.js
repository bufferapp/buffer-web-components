export const posts = [
  {
    id: '590a365d749c2018007b23c6',
    hasPermission: true,
    isConfirmingDelete: false,
    isDeleting: false,
    isPastDue: false,
    isWorking: false,
    imageUrls: [],
    links: [],
    linkAttachment: {},
    manager: false,
    draftDetails: {
      via: 'api',
      userName: 'Herminia Kirlin PhD',
      email: 'herminiakirlinphd@gmail.com',
      avatarUrl: 'https://secure.gravatar.com/avatar/cde7e88ad2321f54ef63a5b5132443b0?s=80&d=mm',
      createdAt: 'May 3rd at 2:58 PM (CDT)',
      postAction: 'This post is scheduled for May 3rd',
      isRetweet: false,
    },
    retweetCommentLinks: [],
    scheduledAt: 1495553578,
    text: 'New thing',
    type: 'text',
    view: 'drafts',
  },
  {
    id: '590a3693749c200e007b23c7',
    hasPermission: true,
    isConfirmingDelete: false,
    isDeleting: false,
    isPastDue: false,
    isWorking: false,
    imageUrls: [],
    links: [],
    linkAttachment: {},
    manager: false,
    draftDetails: {
      via: 'api',
      userName: 'Herminia Kirlin PhD',
      email: 'herminiakirlinphd@gmail.com',
      avatarUrl: 'https://secure.gravatar.com/avatar/cde7e88ad2321f54ef63a5b5132443b0?s=80&d=mm',
      createdAt: 'May 3rd at 2:59 PM (CDT)',
      postAction: 'This post is scheduled for May 3rd',
      isRetweet: false,
    },
    retweetCommentLinks: [],
    scheduledAt: 1495553578,
    text: 'Another thing, that is also new',
    type: 'text',
    view: 'drafts',
  },
];

export const unscheduledPosts = posts.map(post => ({
  ...post,
  draftDetails: {
    via: 'api',
    userName: 'Herminia Kirlin PhD',
    email: 'herminiakirlinphd@gmail.com',
    avatarUrl: 'https://secure.gravatar.com/avatar/cde7e88ad2321f54ef63a5b5132443b0?s=80&d=mm',
    createdAt: 'May 3rd at 2:59 PM (CDT)',
    postAction: 'This post will be added to the queue',
    isRetweet: false,
  },
  scheduledAt: undefined,
}));

export const linkPosts = posts.map(post => ({
  ...post,
  links: [{
    rawString: 'http://buff.ly/1LTbUqv',
    displayString: 'http://buff.ly/1LTbUqv',
    url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
    indices: [74, 96],
  }],
  linkAttachment: {
    title: 'What is a Product Designer?',
    description: 'A brief history at how history and markets influence design titles',
    url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
    thumbnailUrl: 'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg',
  },
  draftDetails: {
    userName: 'Ash',
    avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
    email: 'ash@buffer.com',
    via: 'web',
    createdAt: 'March 2nd at 12:45pm (GMT)',
    postAction: 'This post is scheduled for 9:42pm (GMT)',
  },
  text: 'What is a Product Designer? An awesome story by @jgadapee over on Medium! http://buff.ly/1LTbUqv',
  type: 'link',
}));

export const missingTypePosts = posts.map(post => ({
  ...post,
  type: undefined,
}));

export const imagePosts = posts.map(post => ({
  ...post,
  imageSrc: 'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg',
  type: 'image',
}));

export const multipleImagePosts = posts.map(post => ({
  ...post,
  imageUrls: [
    'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg',
    'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg',
    'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg',
    'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg',
  ],
  type: 'multipleImage',
}));

export const videoPosts = posts.map(post => ({
  ...post,
  imageSrc: 'https://cdn-images-1.medium.com/max/2000/1*1Kua7bNJfvLlTxWqgxVKfw.jpeg',
  type: 'video',
}));

export const managerPosts = posts.map(post => ({
  ...post,
  manager: true,
}));

export const confirmDeletePosts = posts.map(post => ({
  ...post,
  isConfirmingDelete: true,
}));

export const pastDuePosts = posts.map(post => ({
  ...post,
  isPastDue: true,
}));

export const approvalViewPosts = posts.map(post => ({
  ...post,
  view: 'approval',
}));
