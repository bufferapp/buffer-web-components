import React, { PropTypes } from 'react';
import {
  Card,
  Image,
  Link,
  LinkifiedText,
  Text,
} from '@bufferapp/components';
import style from './style.css';
import Post from '../Shared/Post';

const LinkPost = ({
  hasPermission,
  isConfirmingDelete,
  isDeleting,
  isPastDue,
  isWorking,
  links,
  linkAttachment,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onRescheduleClick,
  draftDetails,
  text,
}) => {
  const children = (
    <div className={style['post-content']}>
      <div className={style['post-content-text']}>
        <LinkifiedText
          links={links}
          size={'mini'}
          newTab
          unstyled
        >
          {text}
        </LinkifiedText>
      </div>
      <div>
        <Link href={linkAttachment.url} unstyled>
          <Card
            noPadding
          >
            <div className={style['link-attachment-content']}>
              <Image
                src={linkAttachment.thumbnailUrl}
                width={'15rem'}
                minWidth={'15rem'}
                maxWidth={'15rem'}
                height={'10rem'}
                border={'rounded'}
                objectFit={'cover'}
              />
              <div className={style['link-attachment-text']}>
                <div>
                  <Text>
                    {linkAttachment.title}
                  </Text>
                </div>
                <div className={style['link-url']}>
                  <Text size={'small'} color={'gray'}>
                    {linkAttachment.url}
                  </Text>
                </div>
                <div>
                  <Text size={'small'}>
                    {linkAttachment.description}
                  </Text>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );

  return (
    <Post
      hasPermission={hasPermission}
      isConfirmingDelete={isConfirmingDelete}
      isDeleting={isDeleting}
      isPastDue={isPastDue}
      isWorking={isWorking}
      links={links}
      linkAttachment={linkAttachment}
      manager={manager}
      onApproveClick={onApproveClick}
      onCancelConfirmClick={onCancelConfirmClick}
      onDeleteClick={onDeleteClick}
      onDeleteConfirmClick={onDeleteConfirmClick}
      onEditClick={onEditClick}
      onRescheduleClick={onRescheduleClick}
      draftDetails={draftDetails}
      text={text}
    >
      {children}
    </Post>
  );
};

LinkPost.propTypes = {
  ...Post.commonPropTypes,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(React.PropTypes.number),
    }),
  ).isRequired,
  linkAttachment: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

LinkPost.defaultProps = Post.defaultProps;

export default LinkPost;
