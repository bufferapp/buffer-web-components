import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from '@bufferapp/components';
import {
  borderWidth,
} from '@bufferapp/components/style/border';
import {
  mystic,
} from '@bufferapp/components/style/color';
import HoverableText from '../../../HoverableText';

const verticalLineStyle = {
  marginRight: '0.7rem',
  marginLeft: '0.7rem',
  borderLeft: `${borderWidth} solid ${mystic}`,
};

const PostFooterApproval = ({
  hasPermission,
  isPastDue,
  onApproveClick,
  onRequestApprovalClick,
  onRescheduleClick,
  manager,
  view,
}) => {
  const isDraftsView = view === 'drafts';
  const managerCopy = isDraftsView ? 'Add to Queue' : 'Approve';

  if (isPastDue && hasPermission) {
    return (<span>
      <span style={verticalLineStyle} />
      <Button onClick={onRescheduleClick} noStyle>
        <HoverableText
          size={'small'}
          color={'curiousBlue'}
          hoverColor={'toryBlue'}
        >
          Reschedule
        </HoverableText>
      </Button>
    </span>);
  }

  if (manager) {
    return (<span>
      <span style={verticalLineStyle} />
      <Button onClick={onApproveClick} noStyle>
        <HoverableText
          size={'small'}
          color={'curiousBlue'}
          hoverColor={'toryBlue'}
        >
          {managerCopy}
        </HoverableText>
      </Button>
    </span>);
  }

  if (isDraftsView && hasPermission) {
    return (<span>
      <span style={verticalLineStyle} />
      <Button onClick={onRequestApprovalClick} noStyle>
        <HoverableText
          size={'small'}
          color={'curiousBlue'}
          hoverColor={'toryBlue'}
        >
          Request Approval
        </HoverableText>
      </Button>
    </span>);
  }
  return null;
};

PostFooterApproval.propTypes = {
  hasPermission: PropTypes.bool.isRequired,
  isPastDue: PropTypes.bool,
  onApproveClick: PropTypes.func,
  onRequestApprovalClick: PropTypes.func,
  onRescheduleClick: PropTypes.func,
  manager: PropTypes.bool.isRequired,
  view: PropTypes.string.isRequired,
};

PostFooterApproval.defaultProps = {
  isPastDue: false,
  manager: false,
  onApproveClick: undefined,
  onRequestApprovalClick: undefined,
  onRescheduleClick: undefined,
};

export default PostFooterApproval;
