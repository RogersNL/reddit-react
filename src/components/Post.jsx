import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Post(props){

  function handlePassingIdForUpvote(){
    props.onAddingUpvotes(props.id);
  }
  function handlePassingIdForDownvote(){
    props.onAddingDownvotes(props.id);
  }
  return (
    <div>
      <div className="card">
        <h2 className="card-title">{props.postTitle}</h2>
        <div className="card-body row">
          <div className="col-md-10">
            <p>Post by: {props.name} - {props.formattedPostTime} ago</p>
            <p>{props.post}</p>
          </div>
          <div className="col-md-2">
            <p> <button onClick={handlePassingIdForUpvote} className="btn btn-success">↑</button> {props.upvotes}</p>
            <p> <button onClick={handlePassingIdForDownvote} className="btn btn-danger">↓</button> {props.downvotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function displayTimePosted(timePosted) {
  return timePosted.from(new Moment(), true);
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  formattedPostTime: PropTypes.string.isRequired,
  onAddingUpvotes: PropTypes.func,
  onAddingDownvotes: PropTypes.func
};

export default Post;
