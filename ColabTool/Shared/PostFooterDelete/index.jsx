import React, { PropTypes } from 'react';
import {
  Button,
} from '@bufferapp/components';
import HoverableText from '../../../HoverableText';
import HoverableFocusable from '../../../HoverableFocusable';

const postButtonDeleteStyle = {
  marginLeft: '0.5rem',
};

/* eslint-disable react/prop-types */

const renderConfirmDelete = ({
  onCancelConfirmClick,
}) =>
  <span style={postButtonDeleteStyle}>
    <HoverableFocusable>
      <Button onClick={onCancelConfirmClick} noStyle>
        <HoverableFocusable>
          <HoverableText size={'small'}>Cancel</HoverableText>
        </HoverableFocusable>
      </Button>
    </HoverableFocusable>
  </span>;


const renderDeleteButton = ({
  isConfirmingDelete,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span style={postButtonDeleteStyle}>
    <HoverableFocusable>
      <Button onClick={isConfirmingDelete ? onDeleteConfirmClick : onDeleteClick} noStyle>
        <HoverableFocusable>
          <HoverableText
            color={isConfirmingDelete ? 'torchRed' : undefined}
            size={'small'}
          >
            {isConfirmingDelete ? 'Confirm' : 'Delete'}
          </HoverableText>
        </HoverableFocusable>
      </Button>
    </HoverableFocusable>
  </span>;

/* eslint-enable react/prop-types */

const PostFooterDelete = ({
  isConfirmingDelete,
  onCancelConfirmClick,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span>
    {isConfirmingDelete ?
      renderConfirmDelete({ onCancelConfirmClick }) :
      undefined
    }
    {renderDeleteButton({
      isConfirmingDelete,
      onDeleteConfirmClick,
      onDeleteClick,
    })}
  </span>;

PostFooterDelete.propTypes = {
  isConfirmingDelete: PropTypes.bool,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

PostFooterDelete.defaultProps = {
  isConfirmingDelete: false,
};

export default PostFooterDelete;
