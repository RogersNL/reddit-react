import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <div className="card">
        <h2 className="card-title">{props.postTitle}</h2>
        <div className="card-body row">
          <div className="col-md-10">
            <p>Post by: {props.name}</p>
            <p>{props.post}</p>
          </div>
          <div className="col-md-2">
            <p>Upvotes: {props.upvotes}</p>
            <p>Downvotes: {props.downvotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
Post.propTypes = {
  name: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired
};

export default Post;
