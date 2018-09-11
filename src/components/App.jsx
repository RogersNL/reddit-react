import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import NewPostControl from './NewPostControl';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }
  handleAddingNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }
  handleAddingUpvotes(id){
    let currentPost = null;
    console.log(this.state.masterPostList);
    // for(let i = 0; i < this.state.masterPostList.length; i++){
    //   if(this.state.masterPostList[i].id === id){
    //     currentPost = clickedPost;
    //   }
    // }
    // console.log(currentPost);
  }
  handleAddingDownvotes(id){
    alert(id);
  }

  render(){
    return (
      <div>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path='/' render={()=><PostList postList={this.state.masterPostList}
            onAddingUpvotes={this.handleAddingUpvotes}
            onAddingDownvotes={this.handleAddingDownvotes}
            />} />
            <Route path='/newpost' render={()=><NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
