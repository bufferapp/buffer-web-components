import React, { PropTypes } from 'react';
import {
  Button,
} from '@bufferapp/components';
import style from './style.css';

const calculateButtonText = ({ manager, isWorking }) => {
  if (manager && !isWorking) {
    return 'Approve';
  } else if (manager) {
    return 'Approving...';
  } else if (!isWorking) {
    return 'Request Approval';
  }
  return 'Requesting...';
};

const PostButtonPanel = ({
  disabled,
  manager,
  onApproveClick,
  isWorking,
}) =>
  <div className={style['button-panel']}>
    <Button
      onClick={() => onApproveClick({ manager })}
      disabled={isWorking || disabled}
      fillContainer
    >
      {calculateButtonText({ manager, isWorking })}
    </Button>
  </div>;

PostButtonPanel.propTypes = {
  disabled: PropTypes.bool,
  manager: PropTypes.bool,
  onApproveClick: PropTypes.func.isRequired,
  isWorking: PropTypes.bool,
};

PostButtonPanel.defaultProps = {
  disabled: false,
  manager: false,
  isWorking: false,
};

export default PostButtonPanel;
