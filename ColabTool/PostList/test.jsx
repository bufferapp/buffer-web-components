import React from 'react';
import { mount } from 'enzyme';
import PostList from './index';
import {
  posts,
  managerPosts,
  confirmDeletePosts,
  pastDuePosts,
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
});
