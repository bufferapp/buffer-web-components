import React, { PropTypes } from 'react';
import {
  Card,
  Image,
  Link,
  LinkifiedText,
  Text,
} from '@bufferapp/components';
import Post from '../Shared/Post';

const postContentStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const postContentTextStyle = {
  paddingBottom: '1rem',
};

const linkAttachmentContentStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const linkAttachmentTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  flexGrow: 1,
  minWidth: 0,
};

const linkUrlStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: 'rgba(50, 59, 67, 0.3)',
  margin: '0.25rem 1rem 1rem 0',
};


const LinkPost = ({
  hasPermission,
  isConfirmingDelete,
  isDeleting,
  isMoving,
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
  onMoveToDraftsClick,
  onRequestApprovalClick,
  onRescheduleClick,
  draftDetails,
  scheduledAt,
  text,
  view,
}) => {
  const children = (
    <div style={postContentStyle}>
      <div style={postContentTextStyle}>
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
        <Link href={linkAttachment.url} unstyled newTab>
          <Card
            noPadding
          >
            <div style={linkAttachmentContentStyle}>
              <Image
                src={linkAttachment.thumbnailUrl}
                width={'15rem'}
                minWidth={'15rem'}
                maxWidth={'15rem'}
                height={'10rem'}
                border={'rounded'}
                objectFit={'cover'}
              />
              <div style={linkAttachmentTextStyle}>
                <div>
                  <Text>
                    {linkAttachment.title}
                  </Text>
                </div>
                <div style={linkUrlStyle}>
                  <Text size={'small'} color={'outerSpaceLight'}>
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
      isMoving={isMoving}
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
      onMoveToDraftsClick={onMoveToDraftsClick}
      onRequestApprovalClick={onRequestApprovalClick}
      onRescheduleClick={onRescheduleClick}
      draftDetails={draftDetails}
      scheduledAt={scheduledAt}
      text={text}
      view={view}
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
