import React, { PropTypes } from 'react';
import {
  Card,
  LinkifiedText,
} from '@bufferapp/components';
import DashboardPostFooter from '../DashboardPostFooter';
import RetweetPanel from '../../../ColabTool/Shared/RetweetPanel';

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

const DashboardPost = ({
  children,
  isConfirmingDelete,
  isDeleting,
  isWorking,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onShareNowClick,
  postDetails,
  retweetComment,
  retweetCommentLinks,
  retweetProfile,
  sent,
}) =>
  (<div style={postContainerStyle}>
    <div style={postStyle}>
      <Card
        faded={isDeleting}
        noPadding
      >
        {renderContent({
          children,
          retweetProfile,
          retweetComment,
          retweetCommentLinks,
        })}
        <DashboardPostFooter
          isDeleting={isDeleting}
          isConfirmingDelete={isConfirmingDelete}
          isWorking={isWorking}
          onCancelConfirmClick={onCancelConfirmClick}
          onDeleteClick={onDeleteClick}
          onDeleteConfirmClick={onDeleteConfirmClick}
          onEditClick={onEditClick}
          onShareNowClick={onShareNowClick}
          postDetails={postDetails}
          sent={sent}
        />
      </Card>
    </div>
  </div>);

DashboardPost.commonPropTypes = {
  isConfirmingDelete: PropTypes.bool,
  isDeleting: PropTypes.bool,
  isWorking: PropTypes.bool,
  onCancelConfirmClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onDeleteConfirmClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onShareNowClick: PropTypes.func,
  postDetails: PropTypes.shape({
    isRetweet: PropTypes.bool,
    postAction: PropTypes.string,
    error: PropTypes.string,
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
  sent: PropTypes.bool.isRequired,
};

DashboardPost.propTypes = {
  ...DashboardPost.commonPropTypes,
  children: PropTypes.node.isRequired,
};

DashboardPost.defaultProps = {
  isConfirmingDelete: false,
  isDeleting: false,
  isWorking: false,
};

export default DashboardPost;
