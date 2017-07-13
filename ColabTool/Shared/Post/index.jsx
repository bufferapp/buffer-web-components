import React, { PropTypes } from 'react';
import {
  Card,
  LinkifiedText,
} from '@bufferapp/components';
import PostFooter from '../PostFooter';
import PostHeader from '../PostHeader';
import RetweetPanel from '../RetweetPanel';

const postContainerStyle = {
  display: 'flex',
  width: '100%',
};

const postStyle = {
  flexGrow: 1,
  minWidth: 0,
};

const postContentStyle = {
  padding: '1rem',
  whiteSpace: 'pre-line',
};

const retweetProfileWrapperStyle = {
  marginBottom: '1rem',
};

const commentStyle = {
  marginBottom: '1rem',
};


/* eslint-disable react/prop-types */

const renderRetweetComment = ({
  retweetComment,
  retweetCommentLinks,
}) => (
  <div style={commentStyle}>
    <LinkifiedText
      links={retweetCommentLinks}
      newTab
      size={'mini'}
      unstyled
    >
      { retweetComment }
    </LinkifiedText>
  </div>
);

const renderContent = ({
  children,
  retweetComment,
  retweetCommentLinks,
  retweetProfile,
}) => {
  if (retweetProfile) {
    return (
      <div style={postContentStyle}>
        { retweetComment ? renderRetweetComment({ retweetComment, retweetCommentLinks }) : '' }
        <Card
          color={'off-white'}
          reducedPadding
        >
          <div style={retweetProfileWrapperStyle}>
            <RetweetPanel {...retweetProfile} />
          </div>
          { children }
        </Card>
      </div>
    );
  }

  return (
    <div style={postContentStyle}>
      { children }
    </div>
  );
};

/* eslint-enable react/prop-types */

const Post = ({
  children,
  hasPermission,
  isConfirmingDelete,
  isDeleting,
  isMoving,
  isPastDue,
  isWorking,
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
  retweetComment,
  retweetCommentLinks,
  retweetProfile,
  scheduledAt,
  view,
}) =>
  <div style={postContainerStyle}>
    <div style={postStyle}>
      <Card
        faded={isDeleting}
        noPadding
      >
        <PostHeader
          draftDetails={draftDetails}
        />
        {renderContent({
          children,
          retweetProfile,
          retweetComment,
          retweetCommentLinks,
        })}
        <PostFooter
          hasPermission={hasPermission}
          isDeleting={isDeleting}
          isConfirmingDelete={isConfirmingDelete}
          isMoving={isMoving}
          isPastDue={isPastDue}
          isWorking={isWorking}
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
          view={view}
        />
      </Card>
    </div>
  </div>;

Post.commonPropTypes = {
  hasPermission: PropTypes.bool.isRequired,
  isConfirmingDelete: PropTypes.bool,
  isDeleting: PropTypes.bool,
  isMoving: PropTypes.bool,
  isPastDue: PropTypes.bool,
  isWorking: PropTypes.bool,
  manager: PropTypes.bool,
  onApproveClick: PropTypes.func,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onRescheduleClick: PropTypes.func,
  onMoveToDraftsClick: PropTypes.func,
  onRequestApprovalClick: PropTypes.func,
  draftDetails: PropTypes.shape({
    avatarUrl: PropTypes.string,
    createdAt: PropTypes.string,
    email: PropTypes.string,
    isRetweet: PropTypes.bool,
    postAction: PropTypes.string,
    userName: PropTypes.string,
    via: PropTypes.string,
  }).isRequired,
  retweetProfile: PropTypes.shape({
    avatarUrl: PropTypes.string,
    handle: PropTypes.string,
    name: PropTypes.string,
  }),
  retweetComment: PropTypes.string,
  retweetCommentLinks: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(React.PropTypes.number),
    }),
  ),
  scheduledAt: PropTypes.number,
  view: PropTypes.string.isRequired,
};

Post.propTypes = {
  ...Post.commonPropTypes,
  children: PropTypes.node.isRequired,
};

Post.defaultProps = {
  isConfirmingDelete: false,
  isDeleting: false,
  isMoving: false,
  isPastDue: false,
  isWorking: false,
  manager: false,
};

export default Post;
