import React, { PropTypes } from 'react';
import {
  Button,
  Text,
} from '@bufferapp/components';
import style from './style.css';

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
      <span className={style['vertical-line']} />
      <Button onClick={onRescheduleClick} noStyle>
        <Text size={'small'} color={'blue'}>Reschedule</Text>
      </Button>
    </span>);
  }

  if (manager) {
    return (<span>
      <span className={style['vertical-line']} />
      <Button onClick={onApproveClick} noStyle>
        <Text size={'small'} color={'blue'}>{managerCopy}</Text>
      </Button>
    </span>);
  }

  if (isDraftsView && hasPermission) {
    return (<span>
      <span className={style['vertical-line']} />
      <Button onClick={onRequestApprovalClick} noStyle>
        <Text size={'small'} color={'blue'}> Request Approval </Text>
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
  manager: PropTypes.bool,
  view: PropTypes.string.isRequired,
};

PostFooterApproval.defaultProps = {
  isPastDue: false,
};

export default PostFooterApproval;
