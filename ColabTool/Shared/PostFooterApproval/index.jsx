import React, { PropTypes } from 'react';
import {
  borderWidth,
} from '@bufferapp/components/style/border';
import {
  mystic,
} from '@bufferapp/components/style/color';
import HoverableText from '../../../HoverableText';
import HoverableButton from '../../../HoverableButton';

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
      <HoverableButton onClick={onRescheduleClick} noStyle>
        <HoverableText
          size={'small'}
          color={'curiousBlue'}
          hoverColor={'toryBlue'}
        >
          Reschedule
        </HoverableText>
      </HoverableButton>
    </span>);
  }

  if (manager) {
    return (<span>
      <span style={verticalLineStyle} />
      <HoverableButton onClick={onApproveClick} noStyle>
        <HoverableText
          size={'small'}
          color={'curiousBlue'}
          hoverColor={'toryBlue'}
        >
          {managerCopy}
        </HoverableText>
      </HoverableButton>
    </span>);
  }

  if (isDraftsView && hasPermission) {
    return (<span>
      <span style={verticalLineStyle} />
      <HoverableButton onClick={onRequestApprovalClick} noStyle>
        <HoverableText
          size={'small'}
          color={'curiousBlue'}
          hoverColor={'toryBlue'}
        >
          Request Approval
        </HoverableText>
      </HoverableButton>
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
