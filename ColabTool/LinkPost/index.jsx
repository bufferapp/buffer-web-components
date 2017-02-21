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
  isConfirmingDelete,
  isDeleting,
  isWorking,
  imageSrc,
  links,
  linkAttachment,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  profile,
  text,
}) => {
  const children = (
    <div className={style['post-content']}>
      <div className={style['post-content-text']}>
        <LinkifiedText
          links={links}
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
                src={imageSrc}
                width={'15em'}
                minWidth={'15em'}
                maxWidth={'15em'}
                height={'10em'}
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
      isConfirmingDelete={isConfirmingDelete}
      isDeleting={isDeleting}
      isWorking={isWorking}
      imageSrc={imageSrc}
      links={links}
      linkAttachment={linkAttachment}
      manager={manager}
      onApproveClick={onApproveClick}
      onCancelConfirmClick={onCancelConfirmClick}
      onDeleteClick={onDeleteClick}
      onDeleteConfirmClick={onDeleteConfirmClick}
      onEditClick={onEditClick}
      profile={profile}
      postType={'link'}
      text={text}
    >
      {children}
    </Post>
  );
};

LinkPost.propTypes = {
  ...Post.commonPropTypes,
  imageSrc: PropTypes.string.isRequired,
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
    }).isRequired,
  text: PropTypes.string.isRequired,
};

LinkPost.defaultProps = Post.defaultProps;

export default LinkPost;
