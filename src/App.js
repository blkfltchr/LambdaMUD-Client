import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authenticate from './components/Authenticate'
import Game from './components/Game'
import Login from './components/Login'
import Register from './components/Register'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Blake's Lambda MUD</h1>
        </header>
        <Route exact path='/' component={Game} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    );
  }
}

export default Authenticate(App);
