import React, { PropTypes } from 'react';
import {
  Card,
  LinkifiedText,
} from '@bufferapp/components';
import style from './style.css';
import PostFooter from '../PostFooter';
import PostHeader from '../PostHeader';
import RetweetPanel from '../RetweetPanel';

const renderRetweetComment = ({retweetComment, links}) => (
  <div className={style.comment}>
    <LinkifiedText
      links={links}
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
  links,
  retweetComment,
  retweetProfile,
}) => {
  if (retweetProfile) {
    return (
      <div className={style['post-content']}>
        { retweetComment ? renderRetweetComment({retweetComment, links}) : '' }
        <Card>
          <div className={style['retweet-profile-wrapper']}>
            <RetweetPanel {...retweetProfile} />
          </div>
          { children }
        </Card>
      </div>
    );
  }

  return (
    <div className={style['post-content']}>
      { children }
    </div>
  );
};

const Post = ({
  children,
  hasPermission,
  isConfirmingDelete,
  isDeleting,
  isPastDue,
  isWorking,
  links,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onRescheduleClick,
  draftDetails,
  retweetComment,
  retweetProfile,
}) =>
  <div className={style['post-container']}>
    <div className={style.post}>
      <Card
        faded={isDeleting}
        noPadding
      >
        <PostHeader
          draftDetails={draftDetails}
        />
        {renderContent({children, links, retweetProfile, retweetComment})}
        <PostFooter
          hasPermission={hasPermission}
          isDeleting={isDeleting}
          isConfirmingDelete={isConfirmingDelete}
          isPastDue={isPastDue}
          isWorking={isWorking}
          manager={manager}
          onApproveClick={onApproveClick}
          onCancelConfirmClick={onCancelConfirmClick}
          onDeleteClick={onDeleteClick}
          onDeleteConfirmClick={onDeleteConfirmClick}
          onEditClick={onEditClick}
          onRescheduleClick={onRescheduleClick}
          draftDetails={draftDetails}
        />
      </Card>
    </div>
  </div>;

Post.commonPropTypes = {
  hasPermission: PropTypes.bool.isRequired,
  isConfirmingDelete: PropTypes.bool,
  isDeleting: PropTypes.bool,
  isPastDue: PropTypes.bool,
  isWorking: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(React.PropTypes.number),
    }),
  ),
  manager: PropTypes.bool,
  onApproveClick: PropTypes.func,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onRescheduleClick: PropTypes.func,
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
};

Post.propTypes = {
  ...Post.commonPropTypes,
  children: PropTypes.node.isRequired,
};

Post.defaultProps = {
  isConfirmingDelete: false,
  isDeleting: false,
  isPastDue: false,
  isWorking: false,
  manager: false,
};

export default Post;
