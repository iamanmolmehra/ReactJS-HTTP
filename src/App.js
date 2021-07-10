import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './Compoents/PostList';
import PostForm from './Compoents/PostForm';

class App extends Component {
  render() {
    return (
      <div className = "App">
      <PostForm></PostForm>
        {/* <PostList></PostList> */}
      </div>
    )
  }
}

export default App;
