import React, { PropTypes } from 'react';
import {
  Button,
  Text,
} from '@bufferapp/components';
import style from './style.css';

const renderConfirmDelete = ({
  onCancelConfirmClick,
}) =>
  <span className={style['post-cancel-delete']}>
    <Button onClick={onCancelConfirmClick} noStyle>
      <Text size={'small'}>Cancel</Text>
    </Button>
  </span>;


const renderDeleteButton = ({
  isConfirmingDelete,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span className={style['post-button-delete']}>
    <Button onClick={isConfirmingDelete ? onDeleteConfirmClick : onDeleteClick} noStyle>
      <Text size={'small'} color={isConfirmingDelete ? 'red' : undefined}>
        {isConfirmingDelete ? 'Confirm' : 'Delete'}
      </Text>
    </Button>
  </span>;

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
