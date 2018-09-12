import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewPostForm(props){
  let _name = null;
  let _postTitle = null;
  let _post = null;


  function handleNewPostFormSubmit(event) {
    event.preventDefault();
    props.onNewPostCreation({name: _name.value, postTitle: _postTitle.value, post: _post.value, upvotes: 0, downvotes: 0, id: v4(), timePosted: new Moment()});
    _name.value = '';
    _postTitle.value = '';
    _post.value = '';
  }

  return (
    <div>
      <h3>Write a Post</h3>
      <form onSubmit={handleNewPostFormSubmit}>
        <input
          className="form-control"
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          className="form-control"
          type='text'
          id='postTitle'
          placeholder='Title Your Post'
          ref={(input) => {_postTitle = input;}}/>
        <textarea
          className="form-control"
          id='post'
          placeholder='Write Post Here...'
          ref={(textarea) => {_post = textarea;}}/>
        <button className="btn btn-dark" type='submit'>Post!</button>
      </form>
      <style jsx>{`
        .form-control {
          margin-bottom: 20px;
        }
        h3 {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
