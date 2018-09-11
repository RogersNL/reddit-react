import React from 'react';
import PostRulesConfirmation from './PostRulesConfirmation';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

class NewPostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleRulesConfirmation = this.handleRulesConfirmation.bind(this);
  }

  handleRulesConfirmation(){
    this.setState({formVisibleOnPage: true});
  }
  render(){
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewPostForm onNewPostCreation={this.props.onNewPostCreation}/>;
    } else {
      currentlyVisibleContent = <PostRulesConfirmation onRulesConfirmation={this.handleRulesConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostControl;
