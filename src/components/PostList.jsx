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
          upvotes=0
          downvotes=0
          key={currentPost.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};
export default PostList;
