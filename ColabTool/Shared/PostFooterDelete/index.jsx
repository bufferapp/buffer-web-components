import React, { PropTypes } from 'react';
import HoverableText from '../../../HoverableText';
import HoverableButton from '../../../HoverableButton';

const postButtonDeleteStyle = {
  marginLeft: '0.5rem',
};

/* eslint-disable react/prop-types */

const renderConfirmDelete = ({
  onCancelConfirmClick,
}) =>
  <span style={postButtonDeleteStyle}>
    <HoverableButton onClick={onCancelConfirmClick} noStyle>
      <HoverableText size={'small'}>Cancel</HoverableText>
    </HoverableButton>
  </span>;


const renderDeleteButton = ({
  isConfirmingDelete,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span style={postButtonDeleteStyle}>
    <HoverableButton onClick={isConfirmingDelete ? onDeleteConfirmClick : onDeleteClick} noStyle>
      <HoverableText
        color={isConfirmingDelete ? 'torchRed' : undefined}
        size={'small'}
      >
        {isConfirmingDelete ? 'Confirm' : 'Delete'}
      </HoverableText>
    </HoverableButton>
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
