import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import UsersComponent from './UsersComponent.js';
import FeedComponent from './FeedComponent.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/users">users </Link>
        <Link to="/feed">feed</Link>

        <Route path="/users" component={UsersComponent} />
        <Route path="/feed" component={FeedComponent} />
      </div>
    );
  }
}

export default App;
