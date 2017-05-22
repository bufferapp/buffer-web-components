import React, { PropTypes } from 'react';
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
import HoverableFocusable from '../../../HoverableFocusable';

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
      <HoverableFocusable>
        <Button onClick={onRescheduleClick} noStyle>
          <HoverableFocusable>
            <HoverableText
              size={'small'}
              color={'curiousBlue'}
              hoverColor={'toryBlue'}
            >
              Reschedule
            </HoverableText>
          </HoverableFocusable>
        </Button>
      </HoverableFocusable>
    </span>);
  }

  if (manager) {
    return (<span>
      <span style={verticalLineStyle} />
      <HoverableFocusable>
        <Button onClick={onApproveClick} noStyle>
          <HoverableFocusable>
            <HoverableText
              size={'small'}
              color={'curiousBlue'}
              hoverColor={'toryBlue'}
            >
              {managerCopy}
            </HoverableText>
          </HoverableFocusable>
        </Button>
      </HoverableFocusable>
    </span>);
  }

  if (isDraftsView && hasPermission) {
    return (<span>
      <span style={verticalLineStyle} />
      <HoverableFocusable>
        <Button onClick={onRequestApprovalClick} noStyle>
          <HoverableFocusable>
            <HoverableText
              size={'small'}
              color={'curiousBlue'}
              hoverColor={'toryBlue'}
            >
              Request Approval
            </HoverableText>
          </HoverableFocusable>
        </Button>
      </HoverableFocusable>
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
