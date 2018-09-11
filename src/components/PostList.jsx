import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div>
      <hr/>
      {props.postList.map((currentPost) =>
        <Post name={currentPost.name}
          postTitle={currentPost.postTitle}
          post={currentPost.post}
          upvotes={currentPost.upvotes}
          downvotes={currentPost.downvotes}
          onAddingUpvotes={props.onAddingUpvotes}
          key={currentPost.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onAddingUpvotes: PropTypes.func
};
export default PostList;
