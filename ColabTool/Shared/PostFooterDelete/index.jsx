import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from '@bufferapp/components';
import HoverableText from '../../../HoverableText';

const postButtonDeleteStyle = {
  marginLeft: '0.5rem',
};

/* eslint-disable react/prop-types */

const renderConfirmDelete = ({
  onCancelConfirmClick,
}) =>
  <span style={postButtonDeleteStyle}>
    <Button onClick={onCancelConfirmClick} noStyle>
      <HoverableText size={'small'}>Cancel</HoverableText>
    </Button>
  </span>;


const renderDeleteButton = ({
  isConfirmingDelete,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span style={postButtonDeleteStyle}>
    <Button onClick={isConfirmingDelete ? onDeleteConfirmClick : onDeleteClick} noStyle>
      <HoverableText
        color={isConfirmingDelete ? 'torchRed' : undefined}
        size={'small'}
      >
        {isConfirmingDelete ? 'Confirm' : 'Delete'}
      </HoverableText>
    </Button>
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
