import React from 'react';
import { mount } from 'enzyme';
import PostList from './index';
import {
  posts,
  managerPosts,
  confirmDeletePosts,
  pastDuePosts,
  approvalViewPosts,
} from './postData';

describe('PostList', () => {
  it('should trigger onEditClick', () => {
    const handleEditClick = jest.fn();
    const wrapper = mount(
      <PostList
        posts={posts}
        onApproveClick={() => {}}
        onDeleteCancel={() => {}}
        onDeleteClick={() => {}}
        onDeleteConfirmClick={() => {}}
        onEditClick={handleEditClick}
        onMoveToDraftsClick={() => {}}
        onRequestApprovalClick={() => {}}
        onRescheduleClick={() => {}}
      />,
    );
    // click on the edit button
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(handleEditClick)
      .toBeCalledWith({
        post: posts[0],
      });
  });

  it('should trigger onApproveClick', () => {
    const handleApproveClick = jest.fn();
    const wrapper = mount(
      <PostList
        posts={managerPosts}
        onApproveClick={handleApproveClick}
        onDeleteCancel={() => {}}
        onDeleteClick={() => {}}
        onDeleteConfirmClick={() => {}}
        onEditClick={() => {}}
        onMoveToDraftsClick={() => {}}
        onRequestApprovalClick={() => {}}
        onRescheduleClick={() => {}}
      />,
    );
    // click on the approve button
    wrapper
      .find('button')
      .at(2)
      .simulate('click');
    expect(handleApproveClick)
      .toBeCalledWith({
        post: managerPosts[0],
      });
  });

  it('should trigger onDeleteConfirmClick', () => {
    const handleDeleteConfirmClick = jest.fn();
    const wrapper = mount(
      <PostList
        posts={confirmDeletePosts}
        onApproveClick={() => {}}
        onDeleteCancel={() => {}}
        onDeleteClick={() => {}}
        onDeleteConfirmClick={handleDeleteConfirmClick}
        onEditClick={() => {}}
        onMoveToDraftsClick={() => {}}
        onRequestApprovalClick={() => {}}
        onRescheduleClick={() => {}}
      />,
    );
    // click on the confirm delete button
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(handleDeleteConfirmClick)
      .toBeCalledWith({
        post: confirmDeletePosts[0],
      });
  });

  it('should trigger onCancelConfirmClick', () => {
    const handleCancelConfirmClick = jest.fn();
    const wrapper = mount(
      <PostList
        posts={confirmDeletePosts}
        onApproveClick={() => {}}
        onCancelConfirmClick={handleCancelConfirmClick}
        onDeleteClick={() => {}}
        onDeleteConfirmClick={() => {}}
        onEditClick={() => {}}
        onMoveToDraftsClick={() => {}}
        onRequestApprovalClick={() => {}}
        onRescheduleClick={() => {}}
      />,
    );
    // click on the confirm delete button
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(handleCancelConfirmClick)
      .toBeCalledWith({
        post: confirmDeletePosts[0],
      });
  });

  it('should trigger onDeleteClick', () => {
    const handleDeleteClick = jest.fn();
    const wrapper = mount(
      <PostList
        posts={posts}
        onApproveClick={() => {}}
        onDeleteCancel={() => {}}
        onDeleteClick={handleDeleteClick}
        onDeleteConfirmClick={() => {}}
        onEditClick={() => {}}
        onMoveToDraftsClick={() => {}}
        onRequestApprovalClick={() => {}}
        onRescheduleClick={() => {}}
      />,
    );
    // click on the approve button
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(handleDeleteClick)
      .toBeCalledWith({
        post: posts[0],
      });
  });

  it('should trigger onDeleteClick', () => {
    const handleRescheduleClick = jest.fn();
    const wrapper = mount(
      <PostList
        posts={pastDuePosts}
        onApproveClick={() => {}}
        onDeleteCancel={() => {}}
        onDeleteClick={() => {}}
        onDeleteConfirmClick={() => {}}
        onEditClick={() => {}}
        onMoveToDraftsClick={() => {}}
        onRequestApprovalClick={() => {}}
        onRescheduleClick={handleRescheduleClick}
      />,
    );
    // click on the approve button
    wrapper
      .find('button')
      .at(2)
      .simulate('click');
    expect(handleRescheduleClick)
      .toBeCalledWith({
        post: pastDuePosts[0],
        target: jasmine.any(Object),
      });
  });

  it('should trigger onMoveToDraftsClick', () => {
    const handleMoveToDraftsClick = jest.fn();
    const wrapper = mount(
      <PostList
        posts={approvalViewPosts}
        onApproveClick={() => {}}
        onDeleteCancel={() => {}}
        onDeleteClick={() => {}}
        onDeleteConfirmClick={() => {}}
        onEditClick={() => {}}
        onMoveToDraftsClick={handleMoveToDraftsClick}
        onRequestApprovalClick={() => {}}
        onRescheduleClick={() => {}}
      />,
    );
    // click on the Move to Drafts button
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(handleMoveToDraftsClick)
      .toBeCalledWith({
        post: approvalViewPosts[0],
      });
  });

  it('should trigger onRequestApprovalClick', () => {
    const handleRequestApprovalClick = jest.fn();
    const wrapper = mount(
      <PostList
        posts={posts}
        onApproveClick={() => {}}
        onDeleteCancel={() => {}}
        onDeleteClick={() => {}}
        onDeleteConfirmClick={() => {}}
        onEditClick={() => {}}
        onMoveToDraftsClick={() => {}}
        onRequestApprovalClick={handleRequestApprovalClick}
        onRescheduleClick={() => {}}
      />,
    );
    // click on the Request Approval buttons
    wrapper
      .find('button')
      .at(2)
      .simulate('click');
    expect(handleRequestApprovalClick)
      .toBeCalledWith({
        post: posts[0],
      });
  });
});
